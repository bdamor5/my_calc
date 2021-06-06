import React,{useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const App = () => {

  const [text , setText] = useState('')

  const icon = <i className="fas fa-backspace text-light"></i>
  const num = ['C',icon,'/','9','8','*','6','7','-','5','4','+','2','3','.','1','0','=']

  const handleBtn = (curr) =>{
    //to remove leading zeroes
    //000123 -> 123 ,  in  the text field
    setText(text + curr)    
    
    switch(curr){
      case 'C' :  setText('')
                  break;

      case icon : //to remove last char from a string
                  setText(text.slice(0,-1))
                  break;

      case '=' : try{
                      setText(eval(text).toString())
                  }catch(err){
                    setText('Error')
                  }                                      
                  break

      default : break;
    }
  }

 

  return (
    <>
    <div className='container heading'>
      <h2 className='text-light'>Calculator App</h2>
    </div>  

    <div className='container text-light calc'>

        <div className='textfield'>
            <input placeholder='0' type='text' onChange={(e) => setText(e.target.value)} value={text}/>
        </div>

        <div className='buttons'>
        {
          num.map((curr,i)=>{
            var style = 'primary';

            if(curr === 'C') style = 'danger'
            if(curr === icon) style = 'secondary'
            if(curr === '%') style = 'info'
            if(curr === '/' || curr === '*' || curr === '+' || curr === '-') style = 'warning'
            if(curr === '.') style = 'secondary'
            if(curr === '=') style = 'success'

            //to add dynamic css style
            return <button key={i} onClick = {() => handleBtn(curr)} className={`btn btn-outline-${style}`}>{curr}</button> 
          })
        } 
        </div>
    </div>
    </>
  )
}

export default App
