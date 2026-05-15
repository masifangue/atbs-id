# Pendahuluan

> *"Komputer seharusnya yang melayani kita. Bukan kita yang sibuk melayani komputer."*

## Sebuah Cerita Singkat

Bayangkan kamu seorang admin di sebuah perusahaan kecil. Tugasmu sederhana tapi melelahkan: setiap akhir bulan, kamu menerima laporan penjualan dari 24 cabang dalam bentuk file Excel. Kamu harus:

1. Buka satu per satu file tersebut
2. Ambil angka penjualan total dari sel `D45`
3. Salin ke satu file rangkuman
4. Tutup
5. Ulangi 23 kali lagi

Kalau kamu cekatan, ini selesai dalam 90 menit. Kalau lagi capek, bisa 2 jam. Setiap bulan, ritual yang sama. Selama bertahun-tahun.

Sekarang bayangkan: kamu menulis sekitar 15 baris kode Python, jalankan satu kali, dan rangkuman 24 cabang itu **selesai dalam 3 detik**.

Itulah yang akan kamu pelajari di buku ini.

## Tentang Pemrograman

Banyak orang punya dua kekeliruan tentang pemrograman:

**Kekeliruan #1: Pemrograman itu untuk orang jenius matematika.**

Tidak. Sebagian besar pemrograman tidak butuh matematika lebih dari penjumlahan dan perkalian. Yang dibutuhkan adalah **berpikir langkah demi langkah** — kemampuan yang sudah kamu pakai setiap hari saat masak resep baru atau merakit furniture IKEA.

**Kekeliruan #2: Pemrograman itu butuh bertahun-tahun untuk berguna.**

Juga tidak. Setelah Bab 6 buku ini, kamu sudah bisa menulis program yang nyata-nyata berguna untuk pekerjaanmu. Itu sekitar 2-4 minggu belajar santai.

### Apa itu pemrograman, sebenarnya?

Pemrograman adalah **menulis instruksi yang sangat detail** untuk komputer.

Komputer itu seperti pembantu yang sangat patuh tapi sangat bodoh. Dia akan melakukan persis apa yang kamu suruh. Tidak lebih, tidak kurang. Kalau kamu bilang "buatkan kopi", dia akan bingung karena tidak tahu apa itu "kopi", apa itu "membuat", dan dari mana mulai.

Tapi kalau kamu bilang:

1. Ambil cangkir dari rak kedua
2. Buka toples coklat di sebelah kanan kompor
3. Sendok 2 sendok teh dari toples itu ke cangkir
4. ...

Dia bisa lakukan dengan sempurna. Setiap kali. Tanpa pernah bosan.

**Itulah pemrograman: melatih diri menerjemahkan keinginan kita menjadi instruksi yang sangat detail.**

## Kenapa Python?

Ada ratusan bahasa pemrograman. Kenapa Python?

### 1. Python mudah dibaca

Bandingkan kode untuk menampilkan tulisan "Halo" sebanyak 5 kali:

=== "Python"

    ```python
    for i in range(5):
        print("Halo")
    ```

=== "Java"

    ```java
    public class Halo {
        public static void main(String[] args) {
            for (int i = 0; i < 5; i++) {
                System.out.println("Halo");
            }
        }
    }
    ```

=== "C++"

    ```cpp
    #include <iostream>
    using namespace std;
    int main() {
        for (int i = 0; i < 5; i++) {
            cout << "Halo" << endl;
        }
        return 0;
    }
    ```

Python adalah pilihan pertama untuk pemula bukan karena lebih "mudah" secara teknis, tapi karena lebih sedikit hal yang harus kamu pikirkan untuk memulai.

### 2. Python serbaguna

Bahasa lain biasanya punya spesialisasi. PHP untuk web. R untuk statistik. Swift untuk aplikasi iPhone. Python? Hampir semuanya:

- Otomasi pekerjaan kantor (yang akan kita pelajari di buku ini)
- Web scraping
- Analisis data
- Machine learning & AI
- Web development
- Game development
- Robotika

Investasi waktumu belajar Python akan kepakai banyak hal di kemudian hari.

### 3. Python populer

Python konsisten masuk top 3 bahasa terpopuler di dunia. Artinya:

- Banyak tutorial gratis
- Banyak komunitas tempat bertanya
- Banyak library siap pakai (kode tulisan orang lain yang bisa kamu pakai gratis)
- Banyak peluang kerja

## Tentang Buku Ini

Buku ini dibagi menjadi dua bagian besar.

### Bagian 1: Dasar-Dasar Python (Bab 1-6)

Di sini kamu akan belajar fondasi bahasa Python: bagaimana menyimpan data, bagaimana mengulang sesuatu, bagaimana membuat keputusan, bagaimana mengelompokkan instruksi menjadi blok yang bisa dipakai ulang.

Kelihatan sedikit kering? Iya. Tapi tanpa Bagian 1, Bagian 2 akan terasa seperti sihir yang tidak masuk akal.

### Bagian 2: Otomasi (Bab 7+)

Di sini Python jadi senjata. Tiap bab fokus ke satu jenis tugas yang biasanya membosankan untuk dikerjakan manual:

- 📊 **Excel**: baca, modifikasi, dan bikin file Excel otomatis
- 📄 **PDF & Word**: ekstrak teks, gabungkan dokumen, ganti isi
- 🌐 **Web**: ambil data dari halaman website
- 📧 **Email & SMS**: kirim secara massal dan otomatis
- 📁 **File**: ganti nama, pindahkan, kompres ratusan file sekaligus
- 🖼️ **Gambar**: edit, resize, watermark batch foto
- ⏰ **Penjadwalan**: jalankan program di waktu tertentu otomatis

## Cara Belajar yang Efektif

Setelah mengamati banyak orang yang sukses dan gagal belajar coding, saya merangkum aturan-aturan ini:

!!! tip "Aturan #1: Ketik ulang, jangan copy-paste"

    Saat melihat contoh kode, ketik ulang dengan tanganmu sendiri. Iya, lebih lambat. Iya, kadang typo. Tapi otakmu akan **merekam pola** kode jauh lebih baik dengan mengetik daripada menyalin.

!!! tip "Aturan #2: Eksperimen di tiap contoh"

    Setelah kode contoh berhasil jalan, ubah satu hal. Lihat apa yang terjadi. Ubah angkanya, ganti namanya, hapus satu baris. Kalau error, kamu belajar. Kalau jalan, kamu juga belajar.

!!! tip "Aturan #3: Jangan loncat bab"

    Tiap bab dibangun di atas bab sebelumnya. Loncat bab di awal = bingung di kemudian hari karena ada konsep yang dilewati.

!!! tip "Aturan #4: Bingung itu normal — sampai titik tertentu"

    Kalau satu konsep nggak masuk dalam 5 menit, itu wajar. Kalau dalam 30 menit masih nggak masuk, **berhenti**. Kerjakan hal lain. Besok coba lagi. Otak butuh waktu untuk mencerna.

!!! tip "Aturan #5: Cari teman belajar"

    Belajar sendirian itu berat. Cari minimal satu orang lagi yang juga belajar Python. Bisa teman kantor, teman online, atau di komunitas Discord/Telegram Python Indonesia. Diskusi memperdalam pemahaman.

## Apa yang Tidak Akan Kamu Dapat dari Buku Ini

Demi kejujuran, perlu disebutkan apa yang **bukan** target buku ini:

- Bukan referensi Python lengkap. Beberapa fitur advanced tidak dibahas.
- Bukan buku Computer Science. Kita tidak akan bahas big-O notation, struktur data abstrak, atau algoritma kompleks.
- Bukan persiapan wawancara coding. Kamu butuh sumber lain kalau target kamu pass interview Google.

Buku ini punya satu target sederhana: **bikin kamu bisa pakai Python untuk menyelesaikan masalah harian.** Itu saja.

## Persiapan Sebelum Bab 1

Tidak ada. Serius.

Bab 1 hanya butuh akses internet — kita akan menulis kode Python langsung di browser tanpa install apapun. Install di komputer baru kita lakukan di Bab 2.

Yang perlu kamu siapkan: **kemauan dan waktu**. Sekitar 30-60 menit per bab, dengan latihan. Kalau kamu bisa konsisten 4-5 hari seminggu, kamu akan selesai Bagian 1 dalam 2 minggu.

Siap?

---

[Lanjut ke Bab 1: Dasar-Dasar Python →](../bagian-1-dasar-python/bab-01-dasar-dasar-python.md){ .md-button .md-button--primary }

<div class="atribusi-bab">
Diadaptasi dari Introduction "Automate the Boring Stuff with Python" karya <a href="https://inventwithpython.com/" target="_blank">Al Sweigart</a>. Versi asli: <a href="https://automatetheboringstuff.com/2e/chapter0/" target="_blank">automatetheboringstuff.com/2e/chapter0/</a>. Dilisensikan CC BY-NC-SA.
</div>
