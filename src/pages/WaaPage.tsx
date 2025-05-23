
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const WaaPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#7B466A] to-[#5D3C64] flex flex-col">
      {/* En-tête avec le texte */}
      <div className="p-6 md:p-10 text-white max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Télécharge waa</h1>
        <p className="text-xl md:text-2xl">
          puis connecte-toi à la mini-app e-commerce et passe ta commande en quelques clics chez Royal Panini's.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-between relative px-6 md:px-10">
        {/* Boutons de téléchargement (à gauche) */}
        <div className="md:self-end mb-8 md:mb-16 space-y-4 w-full md:w-auto">
          <Button 
            variant="outline"
            className="w-full md:w-64 bg-black text-white border-none flex items-center gap-2 h-14 justify-center"
            onClick={() => window.open("https://play.google.com/store", "_blank")}
          >
            <Download size={20} />
            <div className="flex flex-col items-start">
              <span className="text-xs">Télécharger sur</span>
              <span className="font-bold">Google Play</span>
            </div>
          </Button>

          <Button 
            variant="outline"
            className="w-full md:w-64 bg-black text-white border-none flex items-center gap-2 h-14 justify-center"
            onClick={() => window.open("https://www.apple.com/app-store", "_blank")}
          >
            <Download size={20} />
            <div className="flex flex-col items-start">
              <span className="text-xs">Télécharger sur</span>
              <span className="font-bold">App Store</span>
            </div>
          </Button>
        </div>

        {/* Image de téléphone (à droite) */}
        <div className="hidden md:block absolute right-0 bottom-0 w-1/2 max-w-md h-4/5">
          <div className="relative h-full">
            {/* Téléphone iPhone */}
            <div className="absolute bottom-0 right-0 w-full h-full">
              <img 
                src="https://i.postimg.cc/tJkxp88n/iphone-mockup.png" 
                alt="iPhone avec Waa App" 
                className="object-contain h-full"
                style={{ filter: "drop-shadow(0 0 15px rgba(0,0,0,0.3))" }}
              />
            </div>
            
            {/* App Waa (superposée sur le téléphone) */}
            <div className="absolute bottom-[25%] right-[15%] w-[20%] h-[10%] bg-[#7B466A] rounded-xl flex items-center justify-center">
              <span className="font-bold text-white text-sm">waa</span>
            </div>

            {/* Autres icônes d'applications */}
            <div className="absolute bottom-[40%] right-[30%] w-[15%] h-[8%] bg-blue-500 rounded-xl"></div>
            <div className="absolute bottom-[40%] right-[10%] w-[15%] h-[8%] bg-green-500 rounded-xl"></div>
            <div className="absolute bottom-[55%] right-[20%] w-[15%] h-[8%] bg-yellow-500 rounded-xl"></div>
          </div>
        </div>

        {/* Version mobile de l'image de téléphone */}
        <div className="md:hidden w-full h-64 relative mt-8">
          <img 
            src="https://i.postimg.cc/tJkxp88n/iphone-mockup.png" 
            alt="iPhone avec Waa App" 
            className="object-contain h-full mx-auto"
          />
          <div className="absolute bottom-[25%] left-[50%] transform -translate-x-1/2 w-[15%] h-[8%] bg-[#7B466A] rounded-xl flex items-center justify-center">
            <span className="font-bold text-white text-xs">waa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaaPage;
