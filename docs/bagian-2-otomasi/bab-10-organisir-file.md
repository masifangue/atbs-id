# Bab 10: Mengorganisir File

> *Kalau punya 5000 foto liburan dengan nama IMG_4827.jpg, IMG_4828.jpg, dst — kamu butuh script ini.*

Bab 9 ngajarin cara baca/tulis file individual. Bab ini ngajarin cara **mengelola file dalam jumlah massal** — rename ratusan file, sort berdasarkan tanggal, kompres folder, dan automasi backup.

Setelah Bab 10, kamu akan bisa:

- Rename file massal dengan pola
- Sort file ke folder berdasarkan kategori
- Hapus file duplikat
- Walk through folder besar dengan filtering
- Build sistem backup yang robust

## 10.1. Operasi File Massal

### Rename Ratusan File Sekaligus

Misal kamu punya 200 foto: `IMG_001.jpg`, `IMG_002.jpg`, dst. Kamu mau ubah jadi `liburan_bali_001.jpg`, `liburan_bali_002.jpg`.

```python
from pathlib import Path

folder = Path.home() / "Pictures" / "Bali"
for i, file in enumerate(sorted(folder.glob("IMG_*.jpg")), start=1):
    nama_baru = f"liburan_bali_{i:03d}.jpg"
    file.rename(file.parent / nama_baru)
    print(f"✓ {file.name} → {nama_baru}")
```

`{i:03d}` format integer dengan padding 0 sampai 3 digit (`1` → `001`).

### Tambah Prefix ke Semua File

```python
folder = Path("dokumen")
for file in folder.glob("*.pdf"):
    file.rename(file.parent / f"2026_{file.name}")
```

### Ubah Format Tanggal di Nama File

Misal file dari `15-05-2026_laporan.docx` jadi `2026-05-15_laporan.docx`:

```python
import re
from pathlib import Path

pola = re.compile(r"(\d{2})-(\d{2})-(\d{4})_(.+)")

for file in Path("laporan").glob("*.docx"):
    match = pola.match(file.name)
    if match:
        hari, bulan, tahun, sisa = match.groups()
        nama_baru = f"{tahun}-{bulan}-{hari}_{sisa}"
        file.rename(file.parent / nama_baru)
```

## 10.2. Sort File Berdasarkan Kategori

### Pisah Berdasarkan Ekstensi

```python
import shutil
from pathlib import Path

KATEGORI = {
    "Gambar": [".jpg", ".jpeg", ".png", ".gif"],
    "Video": [".mp4", ".avi", ".mov", ".mkv"],
    "Dokumen": [".pdf", ".doc", ".docx", ".txt"],
    "Spreadsheet": [".xlsx", ".csv"],
}

def kategori_dari_ekstensi(ext):
    for kategori, ext_list in KATEGORI.items():
        if ext.lower() in ext_list:
            return kategori
    return "Lainnya"

def organize(folder):
    folder = Path(folder)
    for file in folder.iterdir():
        if not file.is_file():
            continue

        kategori = kategori_dari_ekstensi(file.suffix)
        target_folder = folder / kategori
        target_folder.mkdir(exist_ok=True)

        target = target_folder / file.name
        shutil.move(str(file), str(target))
        print(f"✓ {file.name} → {kategori}/")

organize(Path.home() / "Downloads")
```

5 menit menulis ini, biasa-biasanya jam berhour-jam clean Downloads folder manual.

### Sort Berdasarkan Tanggal

```python
import shutil
from pathlib import Path
from datetime import datetime

def sort_by_date(folder):
    folder = Path(folder)
    for file in folder.iterdir():
        if not file.is_file():
            continue

        # Ambil tanggal modifikasi file
        mtime = datetime.fromtimestamp(file.stat().st_mtime)
        sub_folder = folder / mtime.strftime("%Y-%m")  # 2026-05

        sub_folder.mkdir(exist_ok=True)
        shutil.move(str(file), str(sub_folder / file.name))

sort_by_date(Path.home() / "Pictures")
```

## 10.3. Cari File Duplikat

Pakai hash MD5 untuk deteksi duplikat berdasarkan **isi**, bukan nama:

```python
import hashlib
from pathlib import Path
from collections import defaultdict

def hash_file(file, block_size=65536):
    """Generate MD5 hash dari isi file."""
    h = hashlib.md5()
    with open(file, "rb") as f:
        while True:
            block = f.read(block_size)
            if not block:
                break
            h.update(block)
    return h.hexdigest()

def cari_duplikat(folder):
    folder = Path(folder)
    hashes = defaultdict(list)

    for file in folder.rglob("*"):
        if file.is_file():
            try:
                h = hash_file(file)
                hashes[h].append(file)
            except OSError:
                continue

    duplikat = {h: files for h, files in hashes.items() if len(files) > 1}
    return duplikat

dups = cari_duplikat(Path.home() / "Pictures")
for h, files in dups.items():
    print(f"\nDuplikat ({len(files)} file):")
    for f in files:
        print(f"  - {f}")
```

Setelah dapat list, kamu bisa **otomatis hapus** kecuali yang pertama:

```python
for h, files in dups.items():
    files.sort()  # urutkan supaya konsisten
    for file in files[1:]:  # skip yang pertama
        print(f"Hapus: {file}")
        # file.unlink()  # uncomment untuk benar-benar hapus
```

## 10.4. Filter File dengan Kondisi Multiple

```python
from pathlib import Path
from datetime import datetime, timedelta

def cari_file_lama(folder, hari=30, ext=None):
    """Cari file lebih lama dari N hari."""
    folder = Path(folder)
    cutoff = datetime.now() - timedelta(days=hari)

    hasil = []
    for file in folder.rglob("*"):
        if not file.is_file():
            continue

        # Filter ekstensi kalau ada
        if ext and file.suffix.lower() not in ext:
            continue

        mtime = datetime.fromtimestamp(file.stat().st_mtime)
        if mtime < cutoff:
            hasil.append(file)

    return hasil

# Cari PDF lebih dari 6 bulan lalu
file_lama = cari_file_lama(
    Path.home() / "Documents",
    hari=180,
    ext=[".pdf"],
)

print(f"Ditemukan {len(file_lama)} file lama")
total_size = sum(f.stat().st_size for f in file_lama)
print(f"Total size: {total_size / 1024 / 1024:.1f} MB")
```

## 10.5. Project: Auto-Organize Downloads

Skrip yang **bisa kamu jalankan tiap hari** untuk merapikan folder Downloads otomatis.

```python
import shutil
from pathlib import Path
from datetime import datetime

KATEGORI = {
    "📷 Gambar": [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"],
    "🎬 Video": [".mp4", ".avi", ".mov", ".mkv", ".webm"],
    "🎵 Audio": [".mp3", ".wav", ".flac", ".m4a"],
    "📄 Dokumen": [".pdf", ".doc", ".docx", ".odt", ".txt", ".md"],
    "📊 Spreadsheet": [".xlsx", ".xls", ".csv", ".ods"],
    "📝 Presentasi": [".pptx", ".ppt", ".odp"],
    "💾 Arsip": [".zip", ".rar", ".7z", ".tar", ".gz"],
    "💻 Code": [".py", ".js", ".html", ".css", ".json", ".xml"],
    "🎲 Installer": [".exe", ".msi", ".deb", ".dmg"],
}

def kategorikan(ext):
    ext = ext.lower()
    for nama, daftar in KATEGORI.items():
        if ext in daftar:
            return nama
    return "📦 Lainnya"

def organize_downloads(folder):
    folder = Path(folder)
    if not folder.exists():
        print(f"⚠ Folder tidak ada: {folder}")
        return

    print(f"📂 Organize: {folder}")
    print("=" * 50)

    stats = {}
    for file in folder.iterdir():
        if not file.is_file():
            continue
        if file.name.startswith("."):  # skip hidden file
            continue

        kategori = kategorikan(file.suffix)
        target = folder / kategori
        target.mkdir(exist_ok=True)

        try:
            shutil.move(str(file), str(target / file.name))
            stats[kategori] = stats.get(kategori, 0) + 1
        except shutil.Error as e:
            print(f"⚠ Gagal pindah {file.name}: {e}")

    print()
    print("📊 Hasil:")
    for kategori, jumlah in sorted(stats.items()):
        print(f"  {kategori}: {jumlah} file")

    total = sum(stats.values())
    print(f"\n✓ Total: {total} file diorganisir")
    print(f"  Waktu: {datetime.now().strftime('%H:%M:%S')}")

if __name__ == "__main__":
    organize_downloads(Path.home() / "Downloads")
```

Tambahkan ke task scheduler (Task Scheduler di Windows, cron di Mac/Linux), jalan tiap pagi — Downloads kamu **selalu rapi tanpa effort**.

## 10.6. Tips & Best Practice

!!! tip "Selalu test dulu sebelum bulk operation"
    Sebelum jalankan script yang rename/move/hapus banyak file, **test di folder dummy** dulu. Atau pakai mode "dry run":

    ```python
    DRY_RUN = True

    for file in folder.glob("*.jpg"):
        nama_baru = "..."
        if DRY_RUN:
            print(f"[DRY] Would rename: {file.name} → {nama_baru}")
        else:
            file.rename(file.parent / nama_baru)
    ```

    Set `DRY_RUN = False` saat sudah yakin.

!!! warning "Hati-hati dengan Path absolut yang di-hardcode"
    `C:/Users/yazid/Documents` cuma jalan di komputer kamu. Pakai `Path.home()` supaya cross-system:

    ```python
    # Bad
    path = Path("C:/Users/yazid/Documents")

    # Good
    path = Path.home() / "Documents"
    ```

## 10.7. Ringkasan

- **`Path.glob("*.ext")`** untuk filter ekstensi
- **`Path.rglob("*")`** untuk recursive
- **`file.rename(target)`** untuk rename
- **`shutil.move(src, dst)`** untuk pindah
- **`f"{i:03d}"`** untuk numbering dengan padding
- **MD5 hash** untuk deteksi duplikat berdasarkan isi
- **`stat().st_mtime`** untuk tanggal modifikasi
- **Selalu test** dengan DRY_RUN sebelum bulk operation
- **`Path.home()`** untuk path cross-platform

## 10.8. Latihan

### 10.1 — Massal Rename
Folder berisi `IMG_*.jpg`. Rename jadi `foto_001.jpg`, `foto_002.jpg`, dst, urut berdasarkan tanggal modifikasi.

### 10.2 — Pengelompok Foto
Foto-foto di Pictures, sortir ke folder per bulan: `2026-01/`, `2026-02/`, dll.

### 10.3 — Pencari File Besar
Cari 10 file terbesar di Documents. Tampilkan path + ukuran dalam MB.

### 10.4 — Cleanup Sampah
Cari semua file `.tmp`, `.bak`, `.log` di sistem. Tampilkan total size, tawarkan hapus.

### 10.5 — Tantangan: Sync Folder
Buat fungsi `sync(folder_a, folder_b)` yang menyalin file dari A ke B (kalau di B belum ada / lebih lama).

<div class="cheatsheet" markdown>

### Rename Massal
```python
for i, file in enumerate(sorted(folder.glob("*.jpg")), start=1):
    file.rename(file.parent / f"foto_{i:03d}.jpg")
```

### Tambah Prefix
```python
file.rename(file.parent / f"prefix_{file.name}")
```

### Numbering Padded
```python
f"{i:03d}"      # 001, 002, ..., 100
f"{i:05d}"      # 00001, 00002
```

### Sort by Ekstensi
```python
KATEGORI = {
    "Image": [".jpg", ".png"],
    "Video": [".mp4"],
    "Doc":   [".pdf", ".docx"],
}
```

### Sort by Tanggal
```python
mtime = datetime.fromtimestamp(file.stat().st_mtime)
target = folder / mtime.strftime("%Y-%m")
```

### Hash File (Detect Duplikat)
```python
import hashlib

def hash_file(p):
    h = hashlib.md5()
    with open(p, "rb") as f:
        for block in iter(lambda: f.read(65536), b""):
            h.update(block)
    return h.hexdigest()
```

### File Stat
```python
file.stat().st_size      # bytes
file.stat().st_mtime     # modified timestamp
file.stat().st_ctime     # created timestamp
```

### Filter by Date
```python
from datetime import datetime, timedelta

cutoff = datetime.now() - timedelta(days=30)
mtime = datetime.fromtimestamp(file.stat().st_mtime)
if mtime < cutoff:
    # file lebih dari 30 hari
```

### Dry Run Pattern
```python
DRY_RUN = True

if DRY_RUN:
    print(f"[DRY] Would rename {file}")
else:
    file.rename(...)
```

</div>

[← Bab 9](bab-09-file-io.md){ .md-button }
[Lanjut Bab 11 →](bab-11-debugging.md){ .md-button .md-button--primary }

<div class="atribusi-bab">
Diadaptasi dari Chapter 10: Organizing Files, "Automate the Boring Stuff with Python" karya <a href="https://inventwithpython.com/" target="_blank">Al Sweigart</a>. Versi asli: <a href="https://automatetheboringstuff.com/2e/chapter10/" target="_blank">automatetheboringstuff.com/2e/chapter10/</a>. Dilisensikan CC BY-NC-SA 4.0.
</div>
