import ilovemonks from "../../public/ilovemonks.png";

const Header = () => {
  return (
    <header className="h-[60px] [box-shadow:0_3px_6px_0_rgba(50,_50,_50,_.3)] px-6 flex items-center bg-white relative gap-10">
      <img className="h-[30px]" src={ilovemonks.src} alt="I love Monks" />
      <a href="/#" className="text-[#e5322d] text-[14px] font-bold">
        JUNTAR PDF
      </a>
      <a href="/#" className="text-[#161616] text-[14px] font-bold">
        DIVIDIR PDF
      </a>
    </header>
  );
};

export default Header;
