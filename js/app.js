const textKeys = {
  title: {
    en: 'Web Development',
    de: 'Web Development'
  },
  menu: {
    en: 'Menu',
    de: 'Menü'
  },
  privacy: {
    en: 'Privacy',
    de: 'Datenschutz'
  },
  lang: {
    en: 'Deutsch',
    de: 'English'
  },
  titleQuest: {
    en: 'What does a website look like from the back?',
    de: 'Wie sieht eine Webseite von hinten aus?'
  },
  uspQuest1: {
    en: 'Did you ever wonder how websites are actually made?',
    de: 'Hast du dich schonmal gefragt wie Webseiten eigentlich gemacht werden?'
  },
  uspQuest2: {
    en: 'Did you know that you are not actually <em>programming</em> with HTML and CSS?',
    de: 'Wusstest du, dass man mit HTML und CSS gar nicht <em>programmiert</em>?'
  },
  uspQuest3: {
    en: 'You want to know how to change the website of your Kiezkneipe or neighbors group?',
    de: 'Du willst wissen wie du die Seite Deiner Kiezkneipe oder Nachbarschaftsgruppe verändern kannst?'
  },
  uspText: {
    en: `
      If one of these questions concerns you then this course is for you.<br>
      It adresses absolute beginners who want to get basic - and bit advanced - knowledge about how to built a website.<br>
      All you need is a Laptop and 2 hours of your time every 2 weeks.<br>
      We start the September 21st from 3 pm to 5 pm in Bilgisaray (Oranienstraße 45) and continue every two weeks then.<br>
      Together with the participants we will decide whether course language will be german or english.
    `,
    de: `
      Wenn dich eine der Fragen angesprochen hat, dann ist der Kurs für dich.<br>
      Er richtet sich an Anfänger*innen, die die Grundlagen - und ein bisschen mehr - zum Bauen von Webseiten lernen wollen.<br>
      Alles, was du brauchst, ist ein Laptop und zwei Stunden deiner Zeit alle zwei Wochen.<br>
      Wir fangen am 21. September von 15 bis 17 Uhr im Bilgisaray (Oranienstraße 45) und machen dann alle zwei Wochen weiter.<br>
      Gemeinsam mit allen Teilnehmenden werden wir zu Beginn des Kurses entscheiden, ob Englisch oder Deutsch die Kurssprache sein wird.
    `
  },
  disclaimer: {
    en: `
      I'm not an expert. I'm a user.
      I share justifiable <em>opinions</em> not scientific <em>research</em>.
      I am in no way tied to the softwares, services or products mentioned here.
      I do not get money or any other kind of benefits from them — neither directly nor indirectly.
      I am not reliable for any of the softwares, services, products or their usage.
      The lists of softwares, services or products mentioned here are not meant to be terminatory.
    `,
    de: `
      Ich bin kein Experte. Ich bin ein Anwender.
      Ich teile gerechtfertigte <em>Meinungen</em>, keine wissenschaftlichen <em>Forschungsergebnisse</em>.
      Ich bin in keiner Weise mit den hier genannten Softwares, Dienstleistungen oder Produkten verbunden.
      Ich erhalte weder Geld noch irgendwelche anderen Vorteile von ihnen - auch nicht indirekt.
      Ich bin verantwortlich für die hier genannten Softwares, Dienstleistungen, Produkte oder deren Gebrauch. Die hier aufgeführte Liste an Softwares, Dienstleistungen und Produkten ist nicht als abschließend zu betrachten.
    `
  }
}

$(document).foundation();

$(document).ready(() => {
  // set window variable
  window['lang'] = 'en';
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        console.log('target offset: ', target.offset().top);
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

function flipImage(ev) {
  if (!ev) {
    return;
  }

  const img = ev.target;
  if (img.classList.contains('is-flipped')) {
    img.classList.remove('is-flipped');
  } else {
    img.classList.add('is-flipped');
  }
}

function switchLanguage(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('before: ', window['lang']);
  window['lang'] = window['lang'] === 'en' ? 'de' : 'en';
  console.log('after: ', window['lang']);
}
