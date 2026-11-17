
import { useEffect } from "react";

export default function useLegacyInteractions() {
  useEffect(() => {
    let cancelled = false;

    const script = document.createElement("script");

    script.src = "/legacy-interactions.js";
    script.async = false;

    script.onload = () => {
      // Bersihkan jika script selesai dimuat
      // setelah effect sudah dibatalkan.
      if (cancelled) {
        window.__trade2govLegacyCleanup?.();
      }
    };

    script.onerror = () => {
      console.error(
        "Gagal memuat legacy-interactions.js"
      );
    };

    document.body.appendChild(script);

    return () => {
      cancelled = true;

      // Bersihkan event listener dan fungsi global.
      window.__trade2govLegacyCleanup?.();

      // Hapus elemen script.
      script.remove();
    };
  }, []);
}
