
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WaaPage = () => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col text-white p-4 md:p-6 space-y-4 md:space-y-6 relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(135deg, #292f63 0%,rgb(18, 19, 99) 50%, #292f63 100%)',
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
          <h1 className="text-sm font-light flex-1 font-waa">Il est temps de passer à {"  "}<span className="text-black px-2 py-1 rounded-md font-semibold shadow-sm" style={{ background: "#A9C01C"}}>Waa.</span></h1>
        </div>

        {/* Section 2: Image + Boutons */}
        <div className="flex flex-row flex-1 space-y-0 h-[60%] relative z-10">
          {/* Image interface */}
          <div className="w-full flex flex-col items-center justify-center relative">
            <img 
              src="https://i.postimg.cc/9QDHmGGh/Waa.png" 
              alt="Interface waa" 
              className="object-contain h-64 max-w-full z-10"
            />
            <div className="absolute bottom-6 w-32 h-4 bg-black/50 blur-md rounded-full" />
          </div>

          {/* Boutons en colonne */}
          <div className="w-1/2 flex flex-col justify-center items-center space-y-4">
            <Button 
              variant="outline"
              className="w-44 bg-black text-white border-none flex items-center justify-center gap-2 h-12 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=bj.sbin.mobilemoney.customer&hl=en", "_blank")}
            >
              <img
                src="https://i.postimg.cc/76qkVFRp/google-play-3128279.png"
                alt="Play Store"
                className="w-4 h-4 object-contain"
              />
              Google Play
            </Button>

            <Button 
              variant="outline"
              className="w-44 bg-black text-white border-none flex items-center justify-center gap-2 h-12 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => window.open("https://apps.apple.com/bj/app/myceltiis-cash/id6443397512", "_blank")}
            >
              <img
                src="https://i.postimg.cc/NjPZwpT4/apple-store.png"
                alt="Apple Store"
                className="w-4 h-4 object-contain"
              />
              Apple Store
            </Button>
          </div>
        </div>

        {/* Section 3: Texte en bas */}
        <div className="h-[20%] flex items-center justify-center text-center text-sm leading-relaxed px-4 relative z-10">
          <p className="max-w-4xl font-waa">
            Waa est la nouvelle super app de Celtiis qui remplace l'application MyCeltiis Cash. Elle regroupe tous les services de cette dernière avec plein d'autres innovations à l'instar de l'E-Commerce ; Le Ticketing - Scolarité - MyCeltiis - Près de moi, etc.
          </p>
        </div>
      </div>

      {/* Version Mobile - Plein écran avec espaces réduits */}
      <div className="flex md:hidden flex-col min-h-screen">
        {/* Section 1: Logo + Texte (18%) */}
        <div className="flex-none h-[15vh] flex items-center justify-start space-x-10 relative z-10 px-4">
          <img 
            src="https://i.postimg.cc/QN5wkj2k/unnamed.webp" 
            alt="waa logo" 
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-sm font-light flex-1 font-waa">Il est temps de passer à {"  "}<span className="text-black px-2 py-1 rounded-md font-semibold shadow-sm" style={{ background: "#A9C01C"}}>Waa.</span></h1>
        </div>

        {/* Section 2: Image + Boutons (45%) - Section centrale plus compacte */}
        <div className="flex-none h-[45vh] flex relative z-10 px-4">
          {/* Image du téléphone à gauche */}
          <div className="w-full flex flex-col items-center justify-center relative">
            <img 
              src="https://i.postimg.cc/9QDHmGGh/Waa.png" 
              alt="Interface waa" 
              className="object-contain h-64 max-w-full z-10"
            />
            <div className="absolute -bottom-6 w-32 h-4 bg-black/50 blur-md rounded-full" />
          </div>

          {/* Boutons empilés à droite */}
          <div className="w-1/2 flex flex-col justify-center items-center space-y-8">
            <Button 
              variant="outline"
              className="ml-4 w-32 bg-black text-white border-none flex items-center justify-center gap-2 h-10 rounded-full hover:bg-gray-800 transition-colors text-xs"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=bj.sbin.mobilemoney.customer&hl=en", "_blank")}
            >
              <img
                src="https://i.postimg.cc/76qkVFRp/google-play-3128279.png"
                alt="Play Store"
                className="w-4 h-4 object-contain"
              />
              Google Play
            </Button>

            <Button 
              variant="outline"
              className="ml-4 w-32 bg-black text-white border-none flex items-center justify-center gap-2 h-10 rounded-full hover:bg-gray-800 transition-colors text-xs"
              onClick={() => window.open("https://apps.apple.com/bj/app/myceltiis-cash/id6443397512", "_blank")}
            >
              <img
                src="https://i.postimg.cc/NjPZwpT4/apple-store.png"
                alt="Apple Store"
                className="w-4 h-4 object-contain"
              />
              Apple Store
            </Button>
          </div>
        </div>

        {/* Section 3: Texte en bas (18%) */}
        <div className="flex-none h-[15vh] flex items-center justify-center text-center text-xs leading-relaxed px-4 relative z-10">
          <p className="max-w-full font-waa">
            Waa est la nouvelle super app de Celtiis qui remplace l'application MyCeltiis Cash. Elle regroupe tous les services de cette dernière avec plein d'autres innovations à l'instar de l'E-Commerce ; Le Ticketing - Scolarité - MyCeltiis - Près de moi, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaaPage;
