import React from "react";


interface NotfoundPage{
    titleErr:string;
    descripErr:string;
}
function NotfoundPage({titleErr='', descripErr=''}:NotfoundPage){
return(
    <section className="error__section_centr">
        <div className="block-err__div_com">
            <div className="block-err__div_left">
                <p>{titleErr}</p>
                <p>{descripErr}</p>

            </div>
        </div>
    </section>
)
}
export default NotfoundPage