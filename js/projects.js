// Script for simple navigation highlight

document.addEventListener('DOMContentLoaded', function() {
  // Navigation link highlight
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const projectList = document.getElementById('project-list');
  const codeView = document.getElementById('code-view');
  const projectTitle = document.getElementById('project-title');
  const codeDisplay = document.getElementById('code-display');
  const viewGistLink = document.getElementById('view-gist');
  const viewRawLink = document.getElementById('view-raw');
  const backToListBtn = document.getElementById('back-to-list');

  const projects = {
    marsrover: {
      title: 'Mars Rover 100 Sol Photo Viewer',
      gistUrl: 'https://gist.github.com/m-dhieu/ec175b6b6aba286e515829e53f709d46',
      rawUrl: 'https://gist.githubusercontent.com/m-dhieu/ec175b6b6aba286e515829e53f709d46/raw',
      webpageUrl: 'https://m-dhieu.github.io/NASA_MarsRover_100Sol_Photo_Viewer'
    },
    tvmaze: {
      title: 'TVmaze Show Search',
      gistUrl: 'https://gist.github.com/m-dhieu/110a6b66802b743b4b13d534537c78f6',
      rawUrl: 'https://gist.githubusercontent.com/m-dhieu/110a6b66802b743b4b13d534537c78f6/raw',
      webpageUrl: 'https://m-dhieu.github.io/Movie_Search_Engine'
    },
    converter: {
      title: 'Currency Converter',
      gistUrl: 'https://gist.github.com/m-dhieu/74de74fd9453b0306cbec2427d7191a7',
      rawUrl: 'https://gist.githubusercontent.com/m-dhieu/74de74fd9453b0306cbec2427d7191a7/raw',
      webpageUrl: 'https://m-dhieu.github.io/Currency_Converter'
    },
    reminder: {
    title: 'Submission Reminder App (CLI)',
    gistUrl: 'https://github.com/m-dhieu/submission_reminder_app_m-dhieu',
    rawUrl: 'https://raw.githubusercontent.com/m-dhieu/submission_reminder_app_m-dhieu/main/create_environment.sh',
    webpageUrl: 'https://m-dhieu.github.io/submission_reminder_app_m-dhieu'
    },
    regex: {
    title: 'Regex Data Extraction (CLI)',
    gistUrl: 'https://github.com/m-dhieu/alu_regex-data-extraction-m-dhieu',
    rawUrl: 'https://raw.githubusercontent.com/m-dhieu/alu_regex-data-extraction-m-dhieu/main/regex_data_extraction.py',
    webpageUrl: 'https://m-dhieu.github.io/alu_regex-data-extraction-m-dhieu'
    },
    recipe: {
    title: 'Forks &amp; Folks Recipe App (CLI)',
    gistUrl: 'https://github.com/m-dhieu/Forks_and_Folks_RecipeApp',
    rawUrl: 'https://raw.githubusercontent.com/m-dhieu/Forks_and_Folks_RecipeApp/master/create_environment.py',
    webpageUrl: 'https://m-dhieu.github.io/Forks_and_Folks_RecipeApp'
    }    
  };

  async function loadCode(projectKey) {
    const project = projects[projectKey];
    if (!project) return;

    projectTitle.textContent = project.title;
    viewGistLink.href = project.gistUrl;
    viewRawLink.href = project.webpageUrl; // Set to webpage/documentation URL
    codeDisplay.textContent = 'Loading code...';

    try {
      const response = await fetch(project.rawUrl);
      if (!response.ok) throw new Error('Failed to fetch code');
      const code = await response.text();
      codeDisplay.textContent = code;
    } catch (error) {
      codeDisplay.textContent = 'Error loading code.';
      console.error(error);
    }
  }

  function showCodeView(projectKey) {
    projectList.style.display = 'none';
    codeView.style.display = 'block';
    loadCode(projectKey);
  }

  function showProjectList() {
    codeView.style.display = 'none';
    projectList.style.display = 'block';
  }

  document.querySelectorAll('.project-select').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectKey = btn.dataset.project;
      showCodeView(projectKey);
    });
  });

  backToListBtn.addEventListener('click', () => {
    showProjectList();
  });
});

// Script for back to 'Top' button functionality

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
