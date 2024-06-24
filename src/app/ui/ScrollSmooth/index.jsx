const { useEffect } = require("react")


const useScrollSmooth = ((offset)=>{

    useEffect(()=>{
        const handleAnchorClick = (e) =>{
            e.preventDefault();
            const target = e.currentTarget 
            const targetId = target.getAttribute('href')?.slice(1);
            const targetElement = document.getElementById(targetId);

            if(targetElement){
                window.scrollTo({
                    top:targetElement.offsetTop - offset,
                    behavior: 'smooth'
                })
            }
        };
        const anchor = document.querySelectorAll('a[href^="#"]');
        anchor.forEach(anchor =>{
            anchor.addEventListener('click',handleAnchorClick);
        });

        return () =>{
            anchor.forEach(anchor => {
                anchor.removeEventListener('click',handleAnchorClick);
            })
        }

    },[offset]);

});


export default useScrollSmooth;