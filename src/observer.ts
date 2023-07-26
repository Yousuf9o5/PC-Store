function Observer(element: string, className: string): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  });

  // element
  const documentElement = document.querySelectorAll("." + element);

  documentElement.forEach((item) => observer.observe(item));
}

export default Observer;
