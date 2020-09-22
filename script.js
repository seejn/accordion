const accordion = () =>
{
    let accordion = document.querySelectorAll('.content-box');
    let label = document.querySelectorAll('.label');
    for(let i = 0; i < accordion.length; i++)
    {
        label[i].addEventListener("click", () =>
        {
            accordion[i].classList.toggle('active');
        });
        
    }
    

   /* label[1].addEventListener("click", () =>
    {
        accordion[1].classList.toggle('active');
    });
    
    label[2].addEventListener("click", () =>
    {
        accordion[2].classList.toggle('active');
    });

    label[3].addEventListener("click", () =>
    {
        accordion[3].classList.toggle('active');
    });*/
};
const app = () =>
{
    accordion();
}
app();