# Trade2Gov React – Organized Structure

Project hasil pemecahan HTML Trade2Gov v38-ID menjadi React JSX modular.

## Menjalankan
```bash
npm install
npm run dev
```

## Struktur
- `src/components`: komponen UI per section dan komponen bersama.
- `src/pages`: komposisi section menjadi halaman.
- `src/hooks`: integrasi fungsi interaksi prototype lama.
- `src/index.css`: style custom dan Tailwind.
- `public/assets`: aset gambar yang diekstrak dari HTML.
- `public/legacy-interactions.js`: fungsi interaksi prototype yang dipertahankan untuk kompatibilitas awal.

Komponen halaman dipecah dari section asli HTML, sehingga isi dan urutan section tetap mengikuti sumber. Perlu uji browser dan penyempurnaan interaksi/navigation setelah `npm install`.
