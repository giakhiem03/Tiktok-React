import Header from "~/layouts/components/Header";

function HeaderOnly({children}) {
    return ( 
    <div>
        <Header></Header>
        <div className="content">
            {children}
        </div>
    </div> 
    );
}


export default HeaderOnly;