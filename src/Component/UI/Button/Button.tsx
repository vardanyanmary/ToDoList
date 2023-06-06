import cls from "./Button.module.scss";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' >{
  children: React.ReactNode;
  type ?: 'primary' | 'secondary'; 
  htmlType ?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = (props:ButtonProps) => {
    
  const {
    type, 
    htmlType,
    children, 
    ...rest } = props;


  return ( 
    <span>
      <button 
        className={`${cls.Button} ${type}`} 
        type={htmlType} 
        {...rest}
      >
        {children}
      </button>
    </span>
  );
};


export default Button;
