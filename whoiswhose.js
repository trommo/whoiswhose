const controllers=[
  {
    host: "(.*\.)?google\..*", action:()=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML += '<p>' + "Сергей Брин" + '</p>';
        newDiv.innerHTML += "<center><img src='https://raw.githubusercontent.com/trommo/whoiswhose/master/brin.png'></center>";
        newDiv.innerHTML += '<p>' + "Основатель Google, совладелец Youtube и прочих сервисов" + '</p>';
        newDiv.classList.add('popup');
        document.body.appendChild(newDiv);
    } },
  {
    host: "(.*\.)?facebook\.com", action:()=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML += '<p>' + "Марк Цукерберг" + '</p>';
        newDiv.innerHTML += "<center><img src='https://raw.githubusercontent.com/trommo/whoiswhose/master/zuckerberg.png'></center>";
        newDiv.innerHTML += '<p>' + "Основатель Facebook" + '</p>';
        newDiv.classList.add('popup');
        document.body.appendChild(newDiv);
    } },
  {
    host: "(.*\.)?instagram\.com", action:()=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML += '<p>' + "Марк Цукерберг" + '</p>';
        newDiv.innerHTML += "<center><img src='https://raw.githubusercontent.com/trommo/whoiswhose/master/zuckerberg.png'></center>";
        newDiv.innerHTML += '<p>' + "В 2004 году основал Facebook, с 2012 года совладелец Instagram" + '</p>';
        newDiv.classList.add('popup');
        document.body.appendChild(newDiv);
    } }
];

for (var i = 0; i < controllers.length; i++)
if (!!location.hostname.match(controllers[i].host)) {controllers[i].action(); break;}
