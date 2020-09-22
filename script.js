const accordion = () =>
{
    let accordion = document.querySelectorAll('.content-box');
    let label = document.querySelectorAll('.label');
    for(let i = 0; i < accordion.length; i++)
    {
        label[i].addEventListener("click", () =>
        {
            accordion[i].classList.toggle('active');
            accordion[i].classList.toggle('color');
        });
        
    };
};
const app = () =>
{
    accordion();
}
app();