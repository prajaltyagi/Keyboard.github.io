let doc=document.body
console.log(doc)

let string=""
let buttons= document.querySelectorAll('.r')
Array.from(buttons).forEach((r)=>{
    r.addEventListener('click',(btn)=>{
        
            if (btn.target.innerHTML == '(x)') {
              string = " "
              document.querySelector('space').value = string
            }
            else  if (btn.target.innerHTML == 'Space') {
                    string = "\t"
                    document.querySelector('space').value = string
                  }
                  else  if (btn.target.innerHTML == 'Enter') {
                    string = "\n"
                    document.querySelector('space').value = string
                  }
            
            else{
            console.log(btn.target)
            string = string + btn.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})