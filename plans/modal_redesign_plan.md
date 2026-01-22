# Rencana Desain Ulang Modal Terms & Conditions

Berikut adalah usulan desain ulang CSS untuk modal "Terms & Conditions" agar terlihat lebih modern dan profesional.

## Penjelasan Perubahan

1.  **Tampilan Keseluruhan (`.modal-overlay`, `.modal-content`):**
    *   Overlay dibuat sedikit lebih gelap dan diberi efek `blur` (frosted glass) untuk fokus yang lebih baik pada modal.
    *   Konten modal sekarang memiliki sudut yang lebih bulat (`border-radius: 12px`), bayangan yang lebih halus, dan tidak lagi menggunakan `padding` utama karena akan dibagi menjadi beberapa bagian (header, body, footer).
    *   Animasi `fadeIn` dan `scaleIn` ditambahkan agar kemunculan modal lebih mulus.

2.  **Struktur Baru (Header, Body, Footer):**
    *   **`.modal-header`**: Bagian header khusus untuk judul dan tombol tutup (ikon '×'), dipisahkan dengan garis tipis.
    *   **`.modal-body`**: Konten utama (syarat dan ketentuan) akan ditempatkan di sini. Memiliki `padding` sendiri dan scrollbar otomatis jika kontennya panjang.
    *   **`.modal-footer`**: Bagian footer untuk semua aksi (checkbox dan tombol), juga dipisahkan dengan garis. Ini membuat tata letak lebih terorganisir.

3.  **Checkbox dan Tautan (`.terms-agreement`):**
    *   Checkbox dan label sekarang diatur menggunakan `flexbox` agar lebih rapi.
    *   Ukuran checkbox diperbesar sedikit agar lebih mudah di-klik.
    *   Label akan berisi tautan "View Terms & Conditions" yang bisa di-klik pengguna.

4.  **Tombol Aksi (`.modal-actions`, `.btn`):**
    *   Tombol-tombol sekarang rata kanan, sesuai dengan praktik desain UI modern.
    *   Tombol "Cancel" (`.btn-secondary`) memiliki gaya yang lebih netral (abu-abu muda).
    *   Tombol "Accept & Proceed" (`.btn-primary`) menggunakan warna tema utama dan memiliki efek *hover* yang lebih menarik.
    *   Tombol "Accept & Proceed" akan memiliki status `:disabled` (berwarna abu-abu dan tidak bisa di-klik) sampai pengguna melihat T&C.

## Kode CSS yang Diusulkan

```css
/* PROPOSED MODERN MODAL STYLES */

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Slightly darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px); /* Frosted glass effect */
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  background: white;
  padding: 0; /* Remove padding to use sections */
  border-radius: 12px;
  max-width: 600px; /* Slightly smaller for a more modern feel */
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: left;
  max-height: 90vh;
  display: flex;
  flex-direction: column; /* Use flexbox for layout */
  overflow: hidden; /* Prevents content from spilling out of rounded corners */
  transform: scale(0.95);
  animation: scaleIn 0.3s ease-out forwards;
}

.modal-header {
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb; /* Light grey border */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  font-size: 1.25rem; /* 20px */
  font-weight: 600;
  color: #111827; /* Darker grey for text */
}

.modal-close-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280; /* Medium grey */
  padding: 4px;
  line-height: 1;
}

.modal-close-btn:hover {
  color: #111827;
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  font-size: 1rem; /* 16px */
  line-height: 1.6;
  color: #374151; /* Softer text color */
}

.modal-body p {
  margin-bottom: 16px;
}

.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column; /* Stack checkbox and buttons vertically */
  gap: 16px; /* Space between elements */
}

.terms-agreement {
  display: flex;
  align-items: center;
}

.terms-agreement input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-right: 12px;
  accent-color: var(--warna-primary); /* Use theme color for checkbox */
}

.terms-agreement label {
  font-size: 0.9rem;
  color: #374151;
}

.terms-agreement a {
  color: var(--warna-sekunder);
  text-decoration: none;
  font-weight: 500;
}

.terms-agreement a:hover {
  text-decoration: underline;
}

.modal-actions {
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-secondary {
  background-color: #f3f4f6; /* Light grey */
  color: #374151;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover {
  background-color: #e5e7eb;
}

.btn-primary {
  background-color: var(--warna-primary);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: var(--warna-sekunder);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.btn-primary:disabled {
  background-color: #9ca3af; /* Greyed out when disabled */
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}


/* Keyframe animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0.5; }
  to { transform: scale(1); opacity: 1; }
}
```

Apakah Anda setuju dengan usulan desain ini? Jika ya, saya akan melanjutkan untuk menerapkannya.