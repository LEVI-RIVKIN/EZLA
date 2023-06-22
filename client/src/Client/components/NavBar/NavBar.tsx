import AppBar from '@mui/material/AppBar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

export interface NavBarProps {
  title: string;
  hideBackButton?: boolean;
}

export const NavBar = ({ title, hideBackButton = false }: NavBarProps) => {
  const navigate = useNavigate();

  const onClickBackIcon = () => {
    navigate(-1);
  };

  return (
    <AppBar className="p-4 static" position="static">
      <div className="flex items-center justify-center w-full text-xl">
        {title}
        {!hideBackButton && (
          <ArrowForwardIosIcon
            className="absolute right-6 cursor-pointer"
            onClick={onClickBackIcon}
          />
        )}
      </div>
    </AppBar>
  );
};