# Entruempelungsfirma
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ihre zuverlässige Entkrümpelungsfirma – Professionelle Entrümpelung von Wohnungen, Häusern und Büros.">
    <title>Entkrümpelungsfirma – Zufall</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        // Zufällige Texte und Inhalte
        const slogans = [
            "Entrümpeln Sie Ihr Leben, wir machen es einfach!",
            "Wir machen Platz für Neues!",
            "Verabschieden Sie sich von unnötigem Krempel!",
            "Schnelle und effiziente Entrümpelung."
        ];

        const serviceDescriptions = [
            "Wir entrümpeln Ihr Zuhause von A bis Z. Keine Aufgabe ist zu groß!",
            "Büroentrümpelung leicht gemacht – wir helfen Ihnen bei der Büroorganisation.",
            "Vom Keller bis zum Dachboden: Wir kümmern uns um alles."
        ];

        const buttonTexts = [
            "Jetzt kostenlos anfragen!",
            "Sofort Angebot erhalten!",
            "Lassen Sie uns loslegen!"
        ];

        const colors = [
            "#FF6347", // Tomatenrot
            "#32CD32", // Limettengrün
            "#1E90FF", // Dodgerblau
            "#FFD700"  // Gold
        ];

        const images = [
            "https://via.placeholder.com/150/FF6347/ffffff?text=Bild+1",
            "https://via.placeholder.com/150/32CD32/ffffff?text=Bild+2",
            "https://via.placeholder.com/150/1E90FF/ffffff?text=Bild+3",
            "https://via.placeholder.com/150/FFD700/ffffff?text=Bild+4"
        ];

        // Zufallsfunktionen
        function getRandomElement(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        window.onload = function() {
            // Zufälligen Slogan und Button-Text setzen
            document.getElementById("slogan").innerText = getRandomElement(slogans);
            document.getElementById("cta-button").innerText = getRandomElement(buttonTexts);

            // Zufällige Dienstleistungsbeschreibung
            const services = document.querySelectorAll(".service-item p");
            services.forEach(service => {
                service.innerText = getRandomElement(serviceDescriptions);
            });

            // Zufällige Farben setzen
            const randomColor = getRandomElement(colors);
            document.body.style.backgroundColor = randomColor;
            document.querySelectorAll('.cta-button').forEach(btn => {
                btn.style.backgroundColor = randomColor;
            });

            // Zufälliges Bild für Hero Section
            document.getElementById("hero-img").src = getRandomElement(images);
        }
    </script>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">
            <h1>Entrümpelungsservice Müller</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Dienstleistungen</a></li>
                <li><a href="#about">Über uns</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <h2 id="slogan">Zufälliger Slogan</h2>
        <img id="hero-img" src="" alt="Zufälliges Bild">
        <a href="#contact" id="cta-button" class="cta-button">Zufälliger Button-Text</a>
    </section>

    <!-- Dienstleistungen -->
    <section id="services">
        <h2>Unsere Dienstleistungen</h2>
        <div class="service-item">
            <h3>Wohnungsentrümpelung</h3>
            <p>Beschreibung wird zufällig geändert</p>
        </div>
        <div class="service-item">
            <h3>Büroentrümpelung</h3>
            <p>Beschreibung wird zufällig geändert</p>
        </div>
        <div class="service-item">
            <h3>Haushaltsauflösungen</h3>
            <p>Beschreibung wird zufällig geändert</p>
        </div>
    </section>

    <!-- Über uns -->
    <section id="about">
        <h2>Über uns</h2>
        <p>Wir sind ein Unternehmen mit 10 Jahren Erfahrung und kümmern uns um Ihre Entrümpelung auf eine schnelle und umweltfreundliche Art.</p>
    </section>

    <!-- Kontakt -->
    <section id="contact">
        <h2>Kontakt</h2>
        <form action="submit_form.php" method="POST">
            <label for="name">Ihr Name</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Ihre E-Mail</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Ihre Nachricht</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit" class="cta-button">Absenden</button>
        </form>
        <p>Telefon: 01234 567890</p>
        <p>E-Mail: kontakt@entruempelungsfirma.de</p>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Entrümpelungsservice Müller. Alle Rechte vorbehalten.</p>
        <p><a href="#">Impressum</a> | <a href="#">Datenschutz</a></p>
    </footer>
</body>
</html>
