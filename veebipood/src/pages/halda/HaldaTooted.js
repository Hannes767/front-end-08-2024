import React,{useState, useRef} from 'react'
import tootedFailist from "../../data/tooted.json"
import {Link} from "react-router-dom"

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());
  const tootedRef = useRef();

const kustuta = (index) => {
   tootedFailist.splice(index,1);
   muudaTooted(tootedFailist.slice());
}

const lisa = () => {
   tootedFailist.push(tootedRef.current.value);
   muudaTooted(tootedFailist.slice());

}


return (
<div>
   <label>Toote nimetus</label><br />
   <input ref={tootedRef} type="text" /><br />
   <div>Kokku: {tooted.length}</div>
   <button onClick={lisa}>Lisa</button><br /><br />

   {tooted.map((toode, jrknr)=>
       <div key={jrknr}>
          {jrknr}. {toode}
           <button onClick={() => kustuta(jrknr)}>x</button>
           <Link to= {"/muuda-toode/" + jrknr}>
              <button>Muuda</button>
           </Link>
       </div>)}

       
        {tooted.length > 0 && <button onClick={() => muudaTooted([])}>Tühjenda</button>}
        <br/><br/>
</div>
)
}

export default HaldaTooted