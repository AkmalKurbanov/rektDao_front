function scrollToSection(event) {
  event.preventDefault();
  var section = $($(this).attr("href"));
  $("html, body").animate(
    {
      scrollTop: section.offset().top,
    },
    700
  );
}
$("[data-scroll]").on("click", scrollToSection);
