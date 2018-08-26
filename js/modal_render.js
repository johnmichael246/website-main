(function($) {
    var $projectTitle = $('#project-title')
    var $projectDescription = $('#project-description')
    var $projectsModal = $('#portfolioModal')
    var $modalImage = $('#project-image')
    var $modalProjectToolsList = $('#modal-tools')
    var $viewCodeButton= $('#view-code')
    var $projectViewButton = $('#view-project')
    $('a.portfolio-link').each(function() {
        $(this).on('click', function() {
            var $this = $(this)
            $projectTitle.text($this.data('title'))
            $projectDescription.text($this.data('body-content'))
            $modalProjectToolsList.text($this.data('tools'))
            $modalImage.prop('src', $this.data('image-path'))
            $projectViewButton.prop('href', $this.data('site-url'))
            if ($this.data('code-url').match(/private/i)) {
                $viewCodeButton.prop('disabled', true).removeClass('btn-primary').addClass('btn-danger disabled')
            } else {
                $viewCodeButton.prop('disabled', false).removeClass('btn-danger disabled').addClass('btn-primary')
                $viewCodeButton.prop('href', $this.data('code-url'))
            }
            $projectsModal.modal('show')
        })
    })
})(jQuery)