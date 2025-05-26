
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WaaPage = () => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col text-white p-4 md:p-6 space-y-4 md:space-y-6 relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(135deg, #7B466A 0%, #5a2f51 50%, #7B466A 100%)',
      }}
    >
      {/* Motifs décoratifs améliorés */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-16 w-16 h-16 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white rounded-lg rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white rounded-full opacity-15"></div>
        <div className="absolute bottom-1/3 left-1/2 w-10 h-10 border border-white rounded-full"></div>
        {/* Motifs géométriques supplémentaires */}
        <div className="absolute top-20 left-1/3 w-4 h-16 border-l-2 border-white opacity-20 rotate-12"></div>
        <div className="absolute bottom-32 right-1/4 w-14 h-14 border border-white rounded-full opacity-15"></div>
        <div className="absolute top-1/4 right-20 w-6 h-6 bg-white transform rotate-45 opacity-10"></div>
        <div className="absolute bottom-1/4 left-16 w-3 h-20 border-r border-white opacity-25 rotate-45"></div>
      </div>

      {/* Version Desktop */}
      <div className="hidden md:flex flex-col h-full">
        {/* Section 1: Logo + Texte en haut */}
        <div className="flex flex-row justify-between items-center space-y-0 h-[20%] relative z-10">
          <img 
            src="https://i.postimg.cc/QN5wkj2k/unnamed.webp" 
            alt="waa logo" 
            className="h-10 object-contain"
          />
          <h1 className="text-sm font-light text-right px-2">Il est temps de passer à waa</h1>
        </div>

        {/* Section 2: Image + Boutons */}
        <div className="flex flex-row flex-1 space-y-0 h-[60%] relative z-10">
          {/* Image interface */}
          <div className="w-1/2 flex items-center justify-center">
            <img 
              src="https://i.postimg.cc/9QDHmGGh/Waa.png" 
              alt="Interface waa" 
              className="object-contain h-64 max-w-full"
            />
          </div>

          {/* Boutons en colonne */}
          <div className="w-1/2 flex flex-col justify-center items-center space-y-4">
            <Button 
              variant="outline"
              className="w-44 bg-black text-white border-none flex items-center justify-center gap-2 h-12 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=bj.sbin.mobilemoney.customer&hl=en", "_blank")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                <path fill="white" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              Google Play
            </Button>

            <Button 
              variant="outline"
              className="w-44 bg-black text-white border-none flex items-center justify-center gap-2 h-12 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => window.open("https://apps.apple.com/bj/app/myceltiis-cash/id6443397512", "_blank")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 384 512">
                <path fill="white" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Apple Store
            </Button>
          </div>
        </div>

        {/* Section 3: Texte en bas */}
        <div className="h-[20%] flex items-center justify-center text-center text-sm leading-relaxed px-4 relative z-10">
          <p className="max-w-4xl">
            Télécharge waa, puis connecte-toi à la mini-app e-commerce et passe ta commande en quelques clics chez Royal Panini's.
          </p>
        </div>
      </div>

      {/* Version Mobile - Plein écran avec espaces réduits */}
      <div className="flex md:hidden flex-col min-h-screen">
        {/* Section 1: Logo + Texte (18%) */}
        <div className="flex-none h-[18vh] flex items-center justify-start space-x-6 relative z-10 px-4">
          <img 
            src="https://i.postimg.cc/QN5wkj2k/unnamed.webp" 
            alt="waa logo" 
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-sm font-light flex-1">Il est temps de passer à waa</h1>
        </div>

        {/* Section 2: Image + Boutons (64%) - Section centrale plus compacte */}
        <div className="flex-none h-[64vh] flex relative z-10 px-4">
          {/* Image du téléphone à gauche */}
          <div className="w-1/2 flex items-center justify-center">
            <img 
              src="https://i.postimg.cc/9QDHmGGh/Waa.png" 
              alt="Interface waa" 
              className="object-contain h-full max-h-64 max-w-full"
            />
          </div>

          {/* Boutons empilés à droite */}
          <div className="w-1/2 flex flex-col justify-center items-center space-y-6">
            <Button 
              variant="outline"
              className="w-36 bg-black text-white border-none flex items-center justify-center gap-2 h-10 rounded-full hover:bg-gray-800 transition-colors text-xs"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=bj.sbin.mobilemoney.customer&hl=en", "_blank")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512">
                <path fill="white" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              Google Play
            </Button>

            <Button 
              variant="outline"
              className="w-36 bg-black text-white border-none flex items-center justify-center gap-2 h-10 rounded-full hover:bg-gray-800 transition-colors text-xs"
              onClick={() => window.open("https://apps.apple.com/bj/app/myceltiis-cash/id6443397512", "_blank")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 384 512">
                <path fill="white" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Apple Store
            </Button>
          </div>
        </div>

        {/* Section 3: Texte en bas (18%) */}
        <div className="flex-none h-[18vh] flex items-center justify-center text-center text-xs leading-relaxed px-4 relative z-10">
          <p className="max-w-full">
            Waa est la nouvelle super app de Celtiis qui remplace l'application MyCeltiis Cash. Elle regroupe tous les services de cette dernière avec plein d'autres innovations à l'instar de l'E-Commerce ; Le Ticketing - Scolarité - MyCeltiis - Près de moi, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaaPage;
