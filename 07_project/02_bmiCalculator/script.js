const form=document.querySelector("form")

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    const info=document.querySelector('#info');

    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`please give valid height${height}`
    }else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`please give valid height${weight}`
    }else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`
        if(bmi<18.6){
            info.innerHTML="Under Weight "
        }else if(18.6>=bmi<=24.9){
            info.innerHTML="Normal Range"
        }else {
            info.innerHTML="Overweight"
        }
      
        }
    }
)