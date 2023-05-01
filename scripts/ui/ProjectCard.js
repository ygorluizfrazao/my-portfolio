export default function createProjectCard(project) {
    if (!project) return;
  
    const cardComponent = $(
      `<div class="card project-card" id="${project.id}"></div>`
    );
  
    !!project.tags
      ? createTooltipComponent(project).appendTo(cardComponent)
      : null;
  
    createSlideShowComponent(project).appendTo(cardComponent);
    createDataComponent(project).appendTo(cardComponent);
    return cardComponent;
  }
  
  function createTooltipComponent(project) {
    const tooltipHost = $(`
      <div class="floating button tooltip-host">
        <div class="icon-container">
          <span class="icon material-symbols-outlined"> sell </span>
        </div>
      </div>
      `);
    const tooltipFrame = $(`<div class="tooltip-frame"></div>`);
    project.tags.forEach((tag) => {
      $(`
        <div class="chip">
          <span class="chip-text">${tag}</span>
        </div>
        `).appendTo(tooltipFrame);
    });
  
    tooltipFrame.appendTo(tooltipHost);
    return tooltipHost;
  }
  
  function createSlideShowComponent(project) {
    const slideShow = $(`
    <div class="slide-show">
    </div>
    `);
  
    if (!project.projectImages || project.projectImages.length===0) {
      $(`    
      <img
      src = "resources/images/no-image-available.jpg"
      alt = "Sem imagens disponíveis"
      />`).appendTo(slideShow);
      return slideShow;
    }
  
    project.projectImages.forEach((image) => {
      $(`
      <img
      src="${image.url}"
      alt="${image.description}"
      />`).appendTo(slideShow);
    })
    
    return slideShow;
  }
  
  function createDataComponent(project) {
    const dataSection = $(`
    <div class="data">
    </div>`);
  
    createHorizontalDivider().appendTo(dataSection);
  
    !!project.name
      ? createInfoBox("Nome", project.name).appendTo(dataSection)
      : null;
  
    !!project.platform
      ? createInfoBox("Plataforma", project.platform).appendTo(dataSection)
      : null;
  
    !!project.description
      ? createExpandableInfoBox("Descrição", project.description).appendTo(
          dataSection
        )
      : null;
  
    createHorizontalDivider().appendTo(dataSection);
  
    // !!project.githubLink ||
    // !!project.playStoreLink ||
    // !!project.appStoreLink ||
    // !!project.siteLink
    //   ? createIconsPanel(project).appendTo(dataSection)
    //   : null;

    createIconsPanel(project).appendTo(dataSection)
  
    return dataSection;
  }
  
  function createHorizontalDivider() {
    return $(`<span class="divider"></span>`);
  }
  
  function createInfoBox(label, value) {
    return $(`
    <div class="info-box">
      <span class="label">${label}</span>
      <span class="value">${value}</span>
    </div>
    `);
  }
  
  function createExpandableInfoBox(label, value) {
    const newInfoBox = $(`
    <div class="info-box expandable">
    <div class="label-box">
      <span class="label">${label}</span>
      <span class="material-symbols-outlined label icon">
        expand_more
      </span>
    </div>
    <span class="value">${value}</span>
    </div>
    `);
    newInfoBox.click((e) => {
      $(e.target);
      $(e.target).next().slideToggle();
      if ($(e.target).find(".icon").hasClass("rotate180-counter-clockwise")) {
        $(e.target).find(".icon").removeClass("rotate180-counter-clockwise");
        $(e.target).find(".icon").addClass("rotate180");
      } else {
        $(e.target).find(".icon").removeClass("rotate180");
        $(e.target).find(".icon").addClass("rotate180-counter-clockwise");
      }
    });
  
    return newInfoBox;
  }
  
  function createIconsPanel(project) {
    const iconsPanel = $(`<div class="icons"></div>`);
  
    !!project.githubLink
      ? $(`
      <a
      href="${project.githubLink}"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub">
        <img
          class="icon"
          src="/resources/images/github-logo.png"
          alt="github logo"
        />
      </a>
      `).appendTo(iconsPanel)
      : null;
  
    !!project.playStoreLink
      ? $(`                  
        <a
        href="${project.playStoreLink}"
        target="_blank"
        rel="noopener noreferrer"
        title="Play Store"
        >
          <img
            class="icon"
            src="/resources/images/google-play-logo.png"
            alt="play store logo"
          />
        </a>`).appendTo(iconsPanel)
      : null;
  
    !!project.appStoreLink
      ? $(`
          <a
          href="${project.appStoreLink}"
          target="_blank"
          rel="noopener noreferrer"
          title="App Store"
          >
            <img
              class="icon"
              src="/resources/images/apple-logo.png"
              alt="app store logo"
            />
          </a>
          `).appendTo(iconsPanel)
      : null;
  
    !!project.siteLink
      ? $(`
          <a
          href="${project.siteLink}"
          target="_blank"
          rel="noopener noreferrer"
          title="App Store"
          >
            <img
              class="icon"
              src="/resources/images/site-logo.png"
              alt="www logo"
            />
          </a>
          `).appendTo(iconsPanel)
      : null;
  
    return iconsPanel;
  }