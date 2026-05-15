// Mermaid initialization with dark theme matching site design
document.addEventListener('DOMContentLoaded', function () {
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        // Match site tokens
        background: '#141414',
        primaryColor: '#1a1a1a',
        primaryTextColor: '#fafafa',
        primaryBorderColor: '#2a2a2a',
        lineColor: '#6e6e6e',
        secondaryColor: '#1f1f1f',
        tertiaryColor: '#0a0a0a',
        // Colored nodes
        mainBkg: '#1a1a1a',
        nodeBorder: '#2a2a2a',
        clusterBkg: '#141414',
        clusterBorder: '#2a2a2a',
        // Text
        textColor: '#fafafa',
        // Arrows / edges
        edgeLabelBackground: '#141414',
        // Decision diamonds
        actorBkg: '#1a1a1a',
        actorBorder: '#2a2a2a',
        actorTextColor: '#fafafa',
      },
      flowchart: {
        curve: 'basis',
        padding: 18,
        nodeSpacing: 50,
        rankSpacing: 50,
        htmlLabels: true,
      },
      fontFamily: 'Geist, -apple-system, sans-serif',
    });
  }
});
