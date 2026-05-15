---
hide:
  - navigation
  - toc
---

<div class="hero">
  <div class="hero-grid">
    <div class="hero-left">
      <span class="hero-eyebrow">
        <span class="dot"></span>
        <span class="mono">python 3.12 ·</span> CC BY-NC-SA
      </span>
      <h1>
        Otomasi pekerjaan<br>
        membosankan dengan<br>
        <span class="gradient">Python</span><span class="caret">_</span>
      </h1>
      <p class="hero-subtitle">
        Belajar Python dari nol, langsung kepakai. Bukan teori berlapis — tapi cara mengubah pekerjaan harianmu yang membosankan jadi script 10 baris yang selesai dalam hitungan detik.
      </p>
      <div class="hero-cta">
        <a href="bagian-1-dasar-python/bab-01-dasar-dasar-python/" class="btn btn-primary">
          <span class="mono">›</span> Mulai Bab 1 <span class="btn-arrow">→</span>
        </a>
        <a href="pengantar/pendahuluan/" class="btn btn-ghost">
          Baca Pendahuluan
        </a>
      </div>
    </div>

    <div class="hero-right">
      <div class="ide">
        <div class="ide-tabs">
          <span class="ide-tab active">
            <span class="ide-tab-dot"></span> rename_files.py
          </span>
          <span class="ide-tab">organizer.py</span>
          <span class="ide-tab-spacer"></span>
          <span class="ide-action ide-action--run">▶ run</span>
        </div>
        <div class="ide-body">
          <div class="ide-gutter">
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>
          <div class="ide-code">
<span class="py-comment"># automate the boring stuff</span>
<span class="py-keyword">import</span> <span class="py-module">os</span>, <span class="py-module">re</span>

<span class="py-keyword">for</span> <span class="py-var">file</span> <span class="py-keyword">in</span> <span class="py-builtin">os</span>.<span class="py-fn">listdir</span>(<span class="py-str">'./laporan'</span>):
    <span class="py-keyword">if</span> <span class="py-var">file</span>.<span class="py-fn">endswith</span>(<span class="py-str">'.xlsx'</span>):
        <span class="py-var">new</span> = <span class="py-str">f"</span><span class="py-fstring">&#123;<span class="py-var">datetime</span>.<span class="py-fn">now</span>():%Y%m%d&#125;</span><span class="py-str">_&#123;<span class="py-var">file</span>&#125;"</span>
        <span class="py-builtin">os</span>.<span class="py-fn">rename</span>(<span class="py-var">file</span>, <span class="py-var">new</span>)
        <span class="py-fn">print</span>(<span class="py-str">f"✓ &#123;<span class="py-var">new</span>&#125;"</span>)

<span class="py-fn">print</span>(<span class="py-str">'selesai dalam 0.3 detik 🚀'</span>)<span class="py-caret">|</span>
          </div>
        </div>
        <div class="ide-output">
          <div class="ide-output-head">
            <span><span class="o-tag">stdout</span> python3 rename_files.py</span>
            <span class="o-time">0.3s</span>
          </div>
          <div class="ide-output-body">
<span class="o-ok">✓</span> 20260315_laporan-januari.xlsx
<span class="o-ok">✓</span> 20260315_laporan-februari.xlsx
<span class="o-ok">✓</span> 20260315_laporan-maret.xlsx
<span class="o-info">selesai dalam 0.3 detik 🚀</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="page-section">
  <div class="server-strip">
    <div class="server-item">
      <span class="server-label"><span class="server-dot"></span> chapters</span>
      <span class="server-value">20+</span>
      <span class="server-meta">bab lengkap</span>
    </div>
    <div class="server-item">
      <span class="server-label"><span class="server-dot"></span> locale</span>
      <span class="server-value">id_ID</span>
      <span class="server-meta">100% indonesia</span>
    </div>
    <div class="server-item">
      <span class="server-label"><span class="server-dot"></span> price</span>
      <span class="server-value">Rp 0</span>
      <span class="server-meta">selamanya gratis</span>
    </div>
    <div class="server-item">
      <span class="server-label"><span class="server-dot"></span> license</span>
      <span class="server-value">CC</span>
      <span class="server-meta">open source</span>
    </div>
  </div>
</div>

<div class="page-section">
  <div class="section-header">
    <span class="section-eyebrow"># untuk siapa</span>
    <h2 class="section-title">Buku ini ditulis untuk yang belum pernah ngoding</h2>
    <p class="section-subtitle">Tidak ada syarat. Setiap istilah teknis dijelaskan saat pertama kali muncul. Tidak ada asumsi "semua orang sudah tahu ini".</p>
  </div>

  <div class="audience-list">
    <div class="audience-item">
      <span class="audience-emoji">💼</span>
      <div class="audience-text">
        <strong>Pekerja kantoran</strong>
        <span>Bergulat dengan Excel, email, atau file dalam jumlah banyak setiap hari.</span>
      </div>
    </div>
    <div class="audience-item">
      <span class="audience-emoji">🎓</span>
      <div class="audience-text">
        <strong>Mahasiswa</strong>
        <span>Dari jurusan apapun yang ingin tools yang berguna sepanjang karir.</span>
      </div>
    </div>
    <div class="audience-item">
      <span class="audience-emoji">🤔</span>
      <div class="audience-text">
        <strong>Pemula yang penasaran</strong>
        <span>Kenapa Python disebut-sebut terus, dan apa yang sebenarnya bisa dilakukannya.</span>
      </div>
    </div>
    <div class="audience-item">
      <span class="audience-emoji">🚀</span>
      <div class="audience-text">
        <strong>Calon programmer</strong>
        <span>Butuh fondasi sebelum lanjut ke web development, data science, atau AI.</span>
      </div>
    </div>
  </div>
</div>

<div class="page-section">
  <div class="section-header">
    <span class="section-eyebrow"># def what_youll_learn():</span>
    <h2 class="section-title">Bukan teori, keterampilan nyata</h2>
    <p class="section-subtitle">Setelah selesai mempraktikkan buku ini, kamu bisa langsung pakai di pekerjaan harianmu.</p>
  </div>

  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-icon">🐍</div>
      <h3>Menulis Python dari Nol</h3>
      <p>Variable, loop, function, hingga error handling. Fondasi yang kokoh untuk apapun nantinya.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">📊</div>
      <h3>Otomasi Excel</h3>
      <p>Baca, modifikasi, dan generate file Excel — termasuk merging puluhan sheet jadi satu rangkuman.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">📄</div>
      <h3>Manipulasi PDF</h3>
      <p>Gabung, pisah, ekstrak teks, isi formulir — semua tanpa software berbayar.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🌐</div>
      <h3>Web Scraping</h3>
      <p>Ambil data dari halaman website secara otomatis, dengan etika dan rate-limiting yang benar.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">📧</div>
      <h3>Email Otomatis</h3>
      <p>Kirim ratusan email personalisasi sekaligus, atau notifikasi otomatis saat ada event.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">📁</div>
      <h3>Manajemen File</h3>
      <p>Rename, pindahkan, kompres, atau organisir ribuan file dalam beberapa detik.</p>
    </div>
  </div>
</div>

<div class="page-section">
  <div class="section-header">
    <span class="section-eyebrow"># python main.py</span>
    <h2 class="section-title">Tiga jalan untuk memulai</h2>
    <p class="section-subtitle">Pilih sesuai gaya belajarmu. Yang paling pemula bisa langsung loncat ke Bab 1.</p>
  </div>

  <div class="start-grid">
    <a href="pengantar/kata-pengantar/" class="start-card">
      <span class="start-card-number">01</span>
      <h3>Kata Pengantar</h3>
      <p>Cerita di balik project ini dan kenapa Bahasa Indonesia penting untuk komunitas Python lokal.</p>
      <span class="start-card-arrow">Baca cerita →</span>
    </a>
    <a href="pengantar/pendahuluan/" class="start-card">
      <span class="start-card-number">02</span>
      <h3>Pendahuluan</h3>
      <p>Apa itu pemrograman, kenapa Python, dan cara belajar yang efektif. Sekitar 10 menit baca.</p>
      <span class="start-card-arrow">Pahami konteks →</span>
    </a>
    <a href="bagian-1-dasar-python/bab-01-dasar-dasar-python/" class="start-card">
      <span class="start-card-number">03</span>
      <h3>Bab 1: Dasar Python</h3>
      <p>Tulis baris kode Python pertamamu sekarang. Tanpa install. Langsung di browser.</p>
      <span class="start-card-arrow">Mulai ngoding →</span>
    </a>
  </div>
</div>

<div class="page-section">
  <div class="closing-quote">
    <span class="closing-quote-mark">"</span>
    <p>Yang paling membosankan untuk dikerjakan manusia, sering kali yang paling mudah dikerjakan komputer. Buku ini mengajarkan cara menyuruhnya.</p>
  </div>
</div>

<div class="site-attribution">
  <p>
    Project ini adalah terjemahan komunitas dari <a href="https://automatetheboringstuff.com/" target="_blank">"Automate the Boring Stuff with Python"</a> karya <strong>Al Sweigart</strong>, dilisensikan CC BY-NC-SA. Mendukung penulis aslinya? <a href="https://nostarch.com/automatestuff2" target="_blank">Beli versi resminya di No Starch Press</a>.
  </p>
</div>
