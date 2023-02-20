const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;

      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j=0; j<totalNavList; j++)
            {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active") 
            showSection(this);
        })
      }

      var sidemuneu = document.getElementById("sidemuneu");

      function openmenu() {
          sidemuneu.style.left = "0";
          document.getElementById("openn").classList.remove("active-bar");
          document.getElementById("closee").classList.add("active-bar");
      }
      
      function closemenu() {
          sidemuneu.style.left = "-300px";
              document.getElementById("closee").classList.remove("active-bar");
              document.getElementById("openn").classList.add("active-bar");
      
      }