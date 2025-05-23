import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WaaMobilePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col text-white bg-[#7B466A]">
      {/* Section 1 - Logo et texte */}
      <div className="flex items-center justify-between px-6 py-4 h-[20vh]">
        <img
          src="https://i.postimg.cc/QN5wkj2k/unnamed.webp"
          alt="waa logo"
          className="h-10 object-contain"
        />
        <p className="text-right text-base font-medium max-w-[60%]">
          Il est temps de passer à waa
        </p>
      </div>

      {/* Section 2 - Image téléphone et boutons */}
      <div className="flex flex-1 flex-row px-6 items-center justify-between h-[60vh]">
        {/* Image téléphone */}
        <img
          src="https://i.postimg.cc/Bv6RxH3X/Chat-GPT-Image-May-23-2025-01-51-53-AM.png" // Remplaçable par un autre lien
          alt="Téléphone"
          className="h-4/5 object-contain"
        />

        {/* Boutons */}
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            className="bg-black text-white border-none flex items-center gap-2 h-12 rounded-full px-6"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=bj.sbin.mobilemoney.customer&hl=en",
                "_blank"
              )
            }
          >
            <span className="font-medium">Google Play</span>
          </Button>

          <Button
            variant="outline"
            className="bg-black text-white border-none flex items-center gap-2 h-12 rounded-full px-6"
            onClick={() =>
              window.open(
                "https://apps.apple.com/bj/app/myceltiis-cash/id6443397512",
                "_blank"
              )
            }
          >
            <span className="font-medium">Apple Store</span>
          </Button>
        </div>
      </div>

      {/* Section 3 - Texte bas */}
      <div className="flex items-center justify-center text-center px-6 py-6 h-[20vh] text-sm">
        Waa est la nouvelle super app de Celtiis qui remplace l'application MyCeltiis Cash. Elle regroupe tous les services de cette dernière avec plein d'autres innovations à l'instar de l'E-Commerce ; Le Ticketing - Scolarité - MyCeltiis - Près de moi, etc.
      </div>
    </div>
  );
};

export default WaaMobilePage;
