var name= prompt("What is your name?");
var city= prompt("Where are you from?");
var age= parseInt(prompt("How old are you?"));

if( !name || !city || !age ||
        (typeof name != "string" || typeof city!="string" || typeof age != "number"))
{

        alert("Incorect input")

        if (typeof name!="string") alert("Incorect name");
        if (typeof city!="string") alert("Incorect city");
        if (typeof age!="number") alert("Incorect age");

} else
{
    if(age>=21 && age<=45)
    {
       alert(`Ласкаво просимо в клуб в місті ${city}, танці, коктелі до ранку`);
    }else
    {
        if(age <18)
        {
            alert(`Управління поліції в місті ${city} особа до 18 років намагалась потрапити в заклад`)
        } else
        {
            if(age >=18 && age <21)
            {
                alert("Недостатній вік для входу в клуб")
            } else
            {
                alert("Ви застарі для цього клубу")
            }
        }
           
    }
}

if (age >=18 && age <45)
{
    alert(`${name} Ви успішно зареєструвались і ми раді Вас вітати в клубі в місті ${city}`)
} else
{
    alert(`${name} Ви успішно зареєструвались але ми не можемо впустити Вас до клубу в місті ${city}`)
}
