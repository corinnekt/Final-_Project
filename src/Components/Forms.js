import Account from "./Accounts";
import Business from "./Business";
import Commission from "./Commission";
import Preorder from "./Preorder";

type

export default function Forms() {
    return (
        <div className='container'>
            <Commission/>
            <Business/>
            <Account/>
            <Preorder/>
        </div>
    )
}