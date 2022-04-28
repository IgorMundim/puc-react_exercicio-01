import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";
import { ItemMenu} from "./ItemMenu"
export const Header = () =>(
    <header className="header">
        <Logo />
    <nav className="header__navigation">
        <ItemMenu />
        <UserMenu />
    </nav>
</header> 
)