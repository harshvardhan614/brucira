import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
}

const Button = ({ type, title, icon, variant}: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-md border border-solid py-3 px-5 cursor-pointer ${variant}`}
      type={type}
    >
        {icon && <Image src={icon} alt={title} width={20} height={20} className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]"/>}
      <label className="text-[12px] md:text-[16px] whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button