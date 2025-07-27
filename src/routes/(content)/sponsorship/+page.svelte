<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Dhruva - Sponsorship Proposal</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: radial-gradient(ellipse at top, #0f0f23 0%, #1a0d2e 25%, #0a0014 100%);
            color: #ffffff;
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* Nebula background effect */
        .nebula {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -2;
            background: 
                radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 20, 147, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(0, 191, 255, 0.1) 0%, transparent 50%);
        }

        /* Floating particles */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: radial-gradient(circle, #64ffda 0%, transparent 70%);
            border-radius: 50%;
            animation: float 8s infinite ease-in-out;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        /* Container */
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* About Us Hero Section */
        .about-hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            background: linear-gradient(135deg, rgba(30, 0, 50, 0.8) 0%, rgba(0, 20, 40, 0.6) 100%);
            margin-bottom: 4rem;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            width: 100%;
        }

        .about-text {
            padding: 2rem 0;
        }

        .about-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 800;
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 6s ease infinite;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .about-description {
            font-size: clamp(1.1rem, 2.5vw, 1.3rem);
            color: #a0a9c0;
            margin-bottom: 2rem;
        }

        .institution-info {
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            border: 1px solid rgba(100, 255, 218, 0.2);
            backdrop-filter: blur(20px);
            font-size: 0.95rem;
            color: #8892b0;
        }

        .about-visual {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .visual-card {
            aspect-ratio: 1;
            background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(138, 43, 226, 0.1));
            border-radius: 20px;
            border: 2px solid rgba(100, 255, 218, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 1.5rem;
            backdrop-filter: blur(10px);
            transition: all 0.4s ease;
        }

        .visual-card:hover {
            transform: translateY(-10px) scale(1.05);
            border-color: rgba(255, 107, 107, 0.5);
            box-shadow: 0 20px 60px rgba(100, 255, 218, 0.2);
        }

        .visual-card h3 {
            font-size: 1.1rem;
            color: #64ffda;
            margin-bottom: 0.5rem;
        }

        .visual-card p {
            font-size: 0.9rem;
            color: #a0a9c0;
        }

        /* Section Base */
        .section {
            margin: 6rem 0;
            position: relative;
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-title {
            font-size: clamp(2rem, 5vw, 3rem);
            font-weight: 700;
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
        }

        .section-subtitle {
            font-size: clamp(1rem, 2.5vw, 1.2rem);
            color: #8892b0;
            max-width: 600px;
            margin: 0 auto;
        }

        /* Achievements Section - Hexagonal Grid */
        .achievements-title {
            background: linear-gradient(135deg, #ff9a9e, #fecfef, #fecfef);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .achievement-hexagon {
            position: relative;
            background: linear-gradient(135deg, rgba(255, 154, 158, 0.15), rgba(254, 207, 239, 0.15));
            border: 2px solid rgba(255, 154, 158, 0.4);
            border-radius: 24px;
            padding: 2.5rem;
            text-align: center;
            backdrop-filter: blur(15px);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
        }

        .achievement-hexagon::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 154, 158, 0.1), transparent);
            transform: rotate(-45deg);
            transition: all 0.6s ease;
            opacity: 0;
        }

        .achievement-hexagon:hover::before {
            opacity: 1;
            transform: rotate(-45deg) translate(50%, 50%);
        }

        .achievement-hexagon:hover {
            transform: translateY(-15px);
            border-color: rgba(255, 107, 107, 0.8);
            box-shadow: 0 25px 80px rgba(255, 154, 158, 0.3);
        }

        .achievement-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #ff6b6b, #ff9a9e);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 1.5rem;
        }

        /* Project Objectives - Cosmic Cards */
        .objectives-title {
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .objectives-container {
            position: relative;
            margin-top: 3rem;
        }

        .objective-orbit {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }

        .objective-planet {
            display: flex;
            align-items: center;
            gap: 3rem;
            padding: 2rem;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
            border-radius: 30px;
            border: 2px solid rgba(102, 126, 234, 0.4);
            backdrop-filter: blur(20px);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .objective-planet:nth-child(even) {
            flex-direction: row-reverse;
            background: linear-gradient(135deg, rgba(118, 75, 162, 0.15), rgba(102, 126, 234, 0.15));
        }

        .objective-planet::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.6s ease;
        }

        .objective-planet:hover::before {
            left: 100%;
        }

        .objective-planet:hover {
            transform: scale(1.02);
            border-color: rgba(118, 75, 162, 0.8);
            box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
        }

        .objective-number {
            min-width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .objective-content h3 {
            color: #667eea;
            font-size: 1.4rem;
            margin-bottom: 1rem;
        }

        /* Timeline - Space Journey */
        .timeline-title {
            background: linear-gradient(135deg, #f093fb, #f5576c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .timeline-journey {
            position: relative;
            margin-top: 3rem;
            padding: 3rem;
            background: linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.1));
            border-radius: 30px;
            border: 2px solid rgba(240, 147, 251, 0.3);
            backdrop-filter: blur(15px);
            text-align: center;
        }

        .timeline-rocket {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #f093fb, #f5576c);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
            font-size: 1.5rem;
            animation: rocketFloat 3s ease-in-out infinite;
        }

        @keyframes rocketFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .timeline-date {
            font-size: 2rem;
            font-weight: bold;
            color: #f093fb;
            margin-bottom: 1rem;
        }

        /* Budget - Financial Galaxy */
        .budget-title {
            background: linear-gradient(135deg, #a8edea, #fed6e3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .budget-galaxy {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 3rem;
            margin-top: 3rem;
            align-items: center;
        }

        .budget-center {
            position: relative;
            aspect-ratio: 1;
            background: radial-gradient(circle, rgba(168, 237, 234, 0.2) 0%, rgba(254, 214, 227, 0.2) 70%, transparent 100%);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 3px solid rgba(168, 237, 234, 0.5);
            backdrop-filter: blur(20px);
        }

        .budget-amount {
            font-size: clamp(2rem, 5vw, 3rem);
            font-weight: bold;
            color: #a8edea;
            margin-bottom: 0.5rem;
        }

        .budget-label {
            color: #8892b0;
            font-size: 1.1rem;
        }

        .budget-orbits {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .budget-satellite {
            padding: 1.5rem;
            background: linear-gradient(135deg, rgba(168, 237, 234, 0.1), rgba(254, 214, 227, 0.1));
            border-radius: 20px;
            border: 2px solid rgba(168, 237, 234, 0.3);
            text-align: center;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }

        .budget-satellite:hover {
            transform: translateY(-5px);
            border-color: rgba(168, 237, 234, 0.8);
            box-shadow: 0 15px 40px rgba(168, 237, 234, 0.2);
        }

        .budget-percentage {
            font-size: 1.8rem;
            font-weight: bold;
            color: #a8edea;
            margin-bottom: 0.5rem;
        }

        /* What We Need - Crystal Formation */
        .needs-title {
            background: linear-gradient(135deg, #ffecd2, #fcb69f);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .needs-crystal-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .need-crystal {
            position: relative;
            padding: 2rem;
            background: linear-gradient(135deg, rgba(255, 236, 210, 0.15), rgba(252, 182, 159, 0.15));
            border-radius: 25px;
            border: 2px solid rgba(255, 236, 210, 0.4);
            text-align: center;
            backdrop-filter: blur(15px);
            transition: all 0.4s ease;
            overflow: hidden;
        }

        .need-crystal::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(from 0deg, transparent, rgba(255, 236, 210, 0.1), transparent);
            animation: crystalRotate 8s linear infinite;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .need-crystal:hover::after {
            opacity: 1;
        }

        @keyframes crystalRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .need-crystal:hover {
            transform: translateY(-10px) scale(1.02);
            border-color: rgba(252, 182, 159, 0.8);
            box-shadow: 0 20px 50px rgba(255, 236, 210, 0.3);
        }

        .need-number {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #ffecd2, #fcb69f);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-weight: bold;
            color: #333;
            font-size: 1.2rem;
        }

        /* Benefits - Aurora Effects */
        .benefits-title {
            background: linear-gradient(135deg, #84fab0, #8fd3f4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .benefits-aurora {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .benefit-wave {
            position: relative;
            padding: 2rem;
            background: linear-gradient(135deg, rgba(132, 250, 176, 0.15), rgba(143, 211, 244, 0.15));
            border-radius: 20px;
            border: 2px solid rgba(132, 250, 176, 0.4);
            backdrop-filter: blur(15px);
            transition: all 0.4s ease;
            overflow: hidden;
        }

        .benefit-wave::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(132, 250, 176, 0.2), transparent);
            animation: auroraWave 3s ease-in-out infinite;
        }

        @keyframes auroraWave {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        .benefit-wave:hover {
            transform: translateY(-8px);
            border-color: rgba(132, 250, 176, 0.8);
            box-shadow: 0 15px 50px rgba(132, 250, 176, 0.2);
        }

        .benefit-wave h3 {
            color: #84fab0;
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        /* Sponsorship Tiers - Cosmic Hierarchy */
        .tiers-title {
            background: linear-gradient(135deg, #fa709a, #fee140);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .tiers-cosmos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .tier-constellation {
            position: relative;
            padding: 2.5rem;
            border-radius: 25px;
            backdrop-filter: blur(20px);
            border: 3px solid;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
        }

        .tier-constellation::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: inherit;
            filter: blur(20px);
            opacity: 0.3;
            z-index: -1;
        }

        .tier-silver {
            background: linear-gradient(135deg, rgba(192, 192, 192, 0.15), rgba(220, 220, 220, 0.15));
            border-color: #c0c0c0;
        }

        .tier-silver:hover {
            transform: translateY(-15px) scale(1.02);
            border-color: #e0e0e0;
            box-shadow: 0 25px 80px rgba(192, 192, 192, 0.3);
        }

        .tier-gold {
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 223, 0, 0.15));
            border-color: #ffd700;
        }

        .tier-gold:hover {
            transform: translateY(-15px) scale(1.02);
            border-color: #ffed4e;
            box-shadow: 0 25px 80px rgba(255, 215, 0, 0.4);
        }

        .tier-platinum {
            background: linear-gradient(135deg, rgba(229, 228, 226, 0.15), rgba(245, 245, 245, 0.15));
            border-color: #e5e4e2;
        }

        .tier-platinum:hover {
            transform: translateY(-15px) scale(1.02);
            border-color: #f5f5f5;
            box-shadow: 0 25px 80px rgba(229, 228, 226, 0.4);
        }

        .tier-header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .tier-name {
            font-size: 1.8rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .tier-amount {
            font-size: 1.1rem;
            color: #8892b0;
            margin-bottom: 1rem;
        }

        .tier-benefits {
            list-style: none;
        }

        .tier-benefits li {
            padding: 0.8rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            padding-left: 2rem;
        }

        .tier-benefits li:before {
            content: "✦";
            position: absolute;
            left: 0;
            color: inherit;
        }

        .tier-silver .tier-name { color: #c0c0c0; }
        .tier-silver .tier-benefits li:before { color: #c0c0c0; }

        .tier-gold .tier-name { color: #ffd700; }
        .tier-gold .tier-benefits li:before { color: #ffd700; }

        .tier-platinum .tier-name { color: #e5e4e2; }
        .tier-platinum .tier-benefits li:before { color: #e5e4e2; }

        /* Contact - Communication Hub */
        .contact-title {
            background: linear-gradient(135deg, #ff758c, #ff7eb3);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .contact-hub {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .contact-beacon {
            position: relative;
            padding: 2rem;
            background: linear-gradient(135deg, rgba(255, 117, 140, 0.15), rgba(255, 126, 179, 0.15));
            border-radius: 20px;
            border: 2px solid rgba(255, 117, 140, 0.4);
            text-align: center;
            backdrop-filter: blur(15px);
            transition: all 0.4s ease;
            overflow: hidden;
        }

        .contact-beacon::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(255, 117, 140, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            transition: all 0.6s ease;
            transform: translate(-50%, -50%);
        }

        .contact-beacon:hover::after {
            width: 300px;
            height: 300px;
        }

        .contact-beacon:hover {
            transform: translateY(-10px);
            border-color: rgba(255, 117, 140, 0.8);
            box-shadow: 0 20px 60px rgba(255, 117, 140, 0.3);
        }

        .contact-beacon h3 {
            color: #ff758c;
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
        }

        .contact-role {
            color: #ff7eb3;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .contact-email {
            display: block;
            margin-top: 3rem;
            padding: 1.5rem;
            background: linear-gradient(135deg, #ff758c, #ff7eb3);
            color: white;
            text-decoration: none;
            border-radius: 15px;
            font-weight: bold;
            text-align: center;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(255, 117, 140, 0.3);
        }

        .contact-email:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(255, 117, 140, 0.4);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            .container {
                padding: 0 1rem;
            }

            .about-hero {
                min-height: auto;
                padding: 3rem 0;
            }

            .about-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .about-visual {
                grid-template-columns: 1fr;
                gap: 1rem;
            }

            .visual-card {
                padding: 1rem;
            }

            .section {
                margin: 3rem 0;
            }

            .section-header {
                margin-bottom: 2rem;
            }

            .achievements-grid,
            .needs-crystal-grid,
            .benefits-aurora,
            .tiers-cosmos,
            .contact-hub {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .objective-planet {
                flex-direction: column !important;
                text-align: center;
                gap: 1.5rem;
            }

            .budget-galaxy {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .budget-orbits {
                grid-template-columns: 1fr;
            }

            .tier-constellation {
                padding: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .about-visual {
                grid-template-columns: 1fr;
            }

            .achievement-hexagon,
            .need-crystal,
            .benefit-wave,
            .contact-beacon {
                padding: 1.5rem;
            }

            .objective-number {
                min-width: 60px;
                height: 60px;
                font-size: 1.2rem;
            }

            .timeline-journey {
                padding: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Nebula Background -->
    <div class="nebula"></div>
    
    <!-- Floating Particles -->
    <div class="particles" id="particles"></div>

    <div class="container">
        <!-- About Us Hero -->
        <section class="about-hero">
            <div class="about-content">
                <div class="about-text">
                    <h1 class="about-title">About Us</h1>
                    <p class="about-description">
                        We at dhRuVa, the astrophysics club at RVCE, are a group of dedicated and passionate students. 
                        We engage in cutting-edge space research, including solar activity, exoplanet detection, black holes, and stellar life cycles.
                    </p>
                    <div class="institution-info">
                        <strong>R V College of Engineering</strong><br>
                        Autonomous Institution Affiliated to Visvesvaraya Technological University, Bengaluru<br>
                        Approved by AICTE, New Delhi, Accredited by NAAC, Bengaluru
                    </div>
                </div>
                <div class="about-visual">
                    <div class="visual-card">
                        <h3>Research Focus</h3>
                        <p>Radio, optical, and data-driven astronomy combining theoretical and practical research</p>
                    </div>
                    <div class="visual-card">
                        <h3>Publications</h3>
                        <p>Regular articles and review papers contributing to global scientific community</p>
                    </div>
                    <div class="visual-card">
                        <h3>Practical Work</h3>
                        <p>Building telescopes, conducting radio observations, and analyzing astronomical data</p>
                    </div>
                    <div class="visual-card">
                        <h3>Collaborations</h3>
                        <p>Partnerships with educational institutions and participation in competitions</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Achievements Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title achievements-title">Achievements</h2>
                <p class="section-subtitle">Our stellar accomplishments in space research and astronomy</p>
            </div>
            <div class="achievements-grid">
                <div class="achievement-hexagon">
                    <div class="achievement-icon">🏆</div>
                    <h3>Research Excellence</h3>
                    <p>3 of our abstracts were selected for the Global Space Exploration Conference (GLEX 2025) in New Delhi. The conference received 1300+ submissions from 57 countries, making it the highest number ever for an IAF Global Conference.</p>
                </div>
                <div class="achievement-hexagon">
                    <div class="achievement-icon">📡</div>
                    <h3>Radio Astronomy</h3>
                    <p>We calibrated and integrated data from three different Radio telescopes to get larger datasets and more accurate results.</p>
                </div>
                <div class="achievement-hexagon">
                    <div class="achievement-icon">🔬</div>
                    <h3>Data-Driven Astronomy</h3>
                    <p>Successfully structured a dedicated Data-Driven Astronomy Research Sub-Vertical, focusing on deep-space astronomical analysis. Integrated LIGO data into our research workflow to enhance gravitational wave studies.</p>
                </div>
            </div>
        </section>

        <!-- Project Objectives Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title objectives-title">Project Objectives</h2>
                <p class="section-subtitle">High-altitude balloon mission to explore cosmic rays and atmospheric conductivity at 30km altitude</p>
            </div>
            <div class="objectives-container">
                <div class="objective-orbit">
                    <div class="objective-planet">
                        <div class="objective-number">01</div>
                        <div class="objective-content">
                            <h3>Explore Cosmic Rays at High Altitudes</h3>
                            <p>Measure cosmic radiation at different altitudes to better understand its intensity and how it fluctuates with solar activity.</p>
                        </div>
                    </div>
                    <div class="objective-planet">
                        <div class="objective-number">02</div>
                        <div class="objective-content">
                            <h3>Identify Key Patterns</h3>
                            <p>Investigate the expected peak in cosmic ray counts at 24km, due to reduced atmospheric absorption.</p>
                        </div>
                    </div>
                    <div class="objective-planet">
                        <div class="objective-number">03</div>
                        <div class="objective-content">
                            <h3>Contribute to Astrophysical Research</h3>
                            <p>Provide valuable data for understanding cosmic rays' behavior in the upper atmosphere and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Timeline Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title timeline-title">Timeline</h2>
                <p class="section-subtitle">Mission launch schedule</p>
            </div>
            <div class="timeline-journey">
                <div class="timeline-rocket">🚀</div>
                <div class="timeline-date">August 2025</div>
                <h3 style="color: #f093fb; margin-bottom: 1rem;">Project Launch</h3>
                <p>High-altitude balloon launch with cosmic ray detection payloads</p>
            </div>
        </section>

        <!-- Budget Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title budget-title">Financial Projection</h2>
                <p class="section-subtitle">Complete budget breakdown for the cosmic ray detection mission</p>
            </div>
            <div class="budget-galaxy">
                <div class="budget-center">
                    <div class="budget-amount">₹1 LAKH</div>
                    <div class="budget-label">Estimated Budget</div>
                </div>
                <div class="budget-orbits">
                    <div class="budget-satellite">
                        <div class="budget-percentage">63.6%</div>
                        <div>Electronics</div>
                    </div>
                    <div class="budget-satellite">
                        <div class="budget-percentage">18.2%</div>
                        <div>Testing</div>
                    </div>
                    <div class="budget-satellite">
                        <div class="budget-percentage">9.1%</div>
                        <div>Structures</div>
                    </div>
                    <div class="budget-satellite">
                        <div class="budget-percentage">9.1%</div>
                        <div>IoTs</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What We Need Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title needs-title">What We Need Your Help For</h2>
                <p class="section-subtitle">Essential resources required for mission success</p>
            </div>
            <div class="needs-crystal-grid">
                <div class="need-crystal">
                    <div class="need-number">1</div>
                    <h3 style="color: #ffecd2; margin-bottom: 1rem;">Funds</h3>
                    <p>Includes funding for materials and parts</p>
                </div>
                <div class="need-crystal">
                    <div class="need-number">2</div>
                    <h3 style="color: #ffecd2; margin-bottom: 1rem;">Parts</h3>
                    <p>Includes electronics components like microcontrollers etc.</p>
                </div>
                <div class="need-crystal">
                    <div class="need-number">3</div>
                    <h3 style="color: #ffecd2; margin-bottom: 1rem;">Testing</h3>
                    <p>Includes testing of the payload, i.e., vibration, load, stress testing, etc.</p>
                </div>
                <div class="need-crystal">
                    <div class="need-number">4</div>
                    <h3 style="color: #ffecd2; margin-bottom: 1rem;">Materials</h3>
                    <p>Includes materials for the building of the balloon etc.</p>
                </div>
            </div>
        </section>

        <!-- Benefits Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title benefits-title">Benefits</h2>
                <p class="section-subtitle">Comprehensive benefits package for our valued sponsors</p>
            </div>
            <div class="benefits-aurora">
                <div class="benefit-wave">
                    <h3>80G Certificate</h3>
                    <p>Help in tax exemption benefits and achieve your CSR initiative needs</p>
                </div>
                <div class="benefit-wave">
                    <h3>Media Presence</h3>
                    <p>Will ensure endorsements and visibility across all team handles, printed media and all social media handles</p>
                </div>
                <div class="benefit-wave">
                    <h3>Logo Placement</h3>
                    <p>In accordance to the monetary support provided for the project, we will put the company logo on our team's merchandise, testing sites, etc.</p>
                </div>
                <div class="benefit-wave">
                    <h3>Website Presence</h3>
                    <p>We will ensure to mention your support for this project and also list as a key sponsor on our website <a href="https://teamdhruva.com/" style="color: #84fab0; text-decoration: none;">teamdhruva.com</a></p>
                </div>
            </div>
        </section>

        <!-- Sponsorship Tiers Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title tiers-title">Sponsorship Tiers</h2>
                <p class="section-subtitle">Choose your level of partnership with Team Dhruva</p>
            </div>
            <div class="tiers-cosmos">
                <div class="tier-constellation tier-silver">
                    <div class="tier-header">
                        <h3 class="tier-name">Silver Tier</h3>
                        <p class="tier-amount">Up to ₹50k</p>
                    </div>
                    <ul class="tier-benefits">
                        <li>80G certificate</li>
                        <li>Brand endorsements across all social media handles</li>
                        <li>Mention as one of the sponsors for this project on our website</li>
                    </ul>
                </div>
                <div class="tier-constellation tier-gold">
                    <div class="tier-header">
                        <h3 class="tier-name">Gold Tier</h3>
                        <p class="tier-amount">Above ₹50k</p>
                    </div>
                    <ul class="tier-benefits">
                        <li>All Silver tier benefits</li>
                        <li>Logo printed on the merchandise of the team</li>
                        <li>Brand exposure when we visit various events and competitions</li>
                    </ul>
                </div>
                <div class="tier-constellation tier-platinum">
                    <div class="tier-header">
                        <h3 class="tier-name">Platinum Tier</h3>
                        <p class="tier-amount">Above ₹1L</p>
                    </div>
                    <ul class="tier-benefits">
                        <li>All Silver and Gold tier benefits</li>
                        <li>Mention as one of the key contributors to the project</li>
                        <li>Company banners at testing sites and launch site</li>
                        <li>Banners at upcoming events organized by the club</li>
                    </ul>
                </div>
            </div>
            <p style="text-align: center; margin-top: 3rem; color: #8892b0; font-style: italic;">
                Benefits from the team will be provided in every possible way based on the monetary value of your support
            </p>
        </section>

        <!-- Contact Section -->
        <section class="section">
            <div class="section-header">
                <h2 class="section-title contact-title">Contact Us</h2>
                <p class="section-subtitle">Connect with our team leads and sponsorship coordinators</p>
            </div>
            <div class="contact-hub">
                <div class="contact-beacon">
                    <h3>Aryan Acharya</h3>
                    <p class="contact-role">Project Lead</p>
                    <p>+91 96868 38063</p>
                </div>
                <div class="contact-beacon">
                    <h3>Khushi</h3>
                    <p class="contact-role">Project Lead</p>
                    <p>+91 93243 96168</p>
                </div>
                <div class="contact-beacon">
                    <h3>Shrirang Pai</h3>
                    <p class="contact-role">Sponsorship POC</p>
                    <p>+91 91334 39471</p>
                </div>
            </div>
            <a href="mailto:teamdhruva@rvce.edu.in" class="contact-email">
                Email us: teamdhruva@rvce.edu.in
            </a>
        </section>
    </div>

    <script>
        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const numParticles = 50;
            
            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Intersection Observer for scroll animations
        function setupScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all sections
            document.querySelectorAll('.section').forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(50px)';
                section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                observer.observe(section);
            });
        }

        // Smooth scrolling for anchor links
        function setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // Parallax effect for nebula background
        function setupParallax() {
            let ticking = false;
            
            function updateParallax() {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.nebula');
                
                parallaxElements.forEach(element => {
                    const speed = 0.5;
                    const yPos = -(scrolled * speed);
                    element.style.transform = `translateY(${yPos}px)`;
                });
                
                ticking = false;
            }
            
            function requestTick() {
                if (!ticking) {
                    requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }
            
            window.addEventListener('scroll', requestTick);
        }

        // Initialize all effects
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            setupScrollAnimations();
            setupSmoothScrolling();
            setupParallax();
        });

        // Add mouse interaction for particles
        document.addEventListener('mousemove', function(e) {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            particles.forEach((particle, index) => {
                const rect = particle.getBoundingClientRect();
                const particleX = rect.left + rect.width / 2;
                const particleY = rect.top + rect.height / 2;
                
                const distance = Math.sqrt(
                    Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
                );
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    const angle = Math.atan2(particleY - mouseY, particleX - mouseX);
                    const moveX = Math.cos(angle) * force * 20;
                    const moveY = Math.sin(angle) * force * 20;
                    
                    particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    particle.style.transform = 'translate(0px, 0px)';
                }
            });
        });
    </script>
</body>
</html>