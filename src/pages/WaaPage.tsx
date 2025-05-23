import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WaaPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative overflow-hidden">
      {/* Background image for mobile only with blur */}
      <div className="md:hidden absolute inset-0 -z-10">
        <img
          src="https://i.postimg.cc/Bv6RxH3X/Chat-GPT-Image-May-23-2025-01-51-53-AM.png"
          alt="Mobile background"
          className="w-full h-full object-cover backdrop-blur-[2px]"
        />
        {/* flou sur l'image via une div superposée */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Contenu gauche (colonne entière sur mobile) */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-12 z-10 min-h-screen md:bg-white">
        {/* Logo en haut */}
        <div className="mb-4">
          <img 
            src="https://i.postimg.cc/QN5wkj2k/unnamed.webp" 
            alt="waa logo" 
            className="h-10 object-contain"
          />
        </div>

        {/* Texte au milieu */}
        <div className="flex-1 flex items-center">
          <h1 className="text-xl md:text-4xl font-normal leading-snug text-white md:text-black">
            Télécharge waa, puis connecte-toi à la mini-app e-commerce et passe ta commande en quelques clics chez Royal Panini's.
          </h1>
        </div>

        {/* Boutons en bas */}
        <div className="flex gap-4 mt-6 flex-wrap">
          <Button
            variant="outline"
            className="flex-1 md:flex-none md:w-64 bg-black text-white border-none flex items-center gap-2 h-12 rounded-full px-6"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=bj.sbin.mobilemoney.customer&hl=en",
                "_blank"
              )
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
              <path
                fill="white"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              />
            </svg>
            <span className="font-medium">Google Play</span>
          </Button>

          <Button
            variant="outline"
            className="flex-1 md:flex-none md:w-64 bg-black text-white border-none flex items-center gap-2 h-12 rounded-full px-6"
            onClick={() =>
              window.open(
                "https://apps.apple.com/bj/app/myceltiis-cash/id6443397512",
                "_blank"
              )
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512">
              <path
                fill="white"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            <span className="font-medium">Apple Store</span>
          </Button>
        </div>
      </div>

      {/* Partie image à droite sur desktop */}
      <div className="hidden md:flex w-1/2">
        <img
          src="https://i.postimg.cc/Bv6RxH3X/Chat-GPT-Image-May-23-2025-01-51-53-AM.png"
          alt="iPhone"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WaaPage;
