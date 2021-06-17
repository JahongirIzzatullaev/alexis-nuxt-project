<template>
    <form class="contact-form-wrapper">
        <div class="row">
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div class="form-group">
                    <input class="form-control" type="text" name="con_name" placeholder="Your Name">
                </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <div class="form-group">
                    <input class="form-control" type="email" name="con_email" placeholder="Email Address">
                </div>
            </div>
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="900">
                <div class="form-group">
                    <input class="form-control" type="text" name="con_subject" placeholder="Subject (optional)">
                </div>
            </div>
            <div class="col-md-12" data-aos="fade-up">
                <div class="form-group mb-0">
                    <textarea name="con_message" rows="5" placeholder="Your message here..."></textarea>
                </div>
            </div>
            <div class="col-md-12 text-center" data-aos="fade-up" data-aos-delay="300">
                <div class="form-group mb-0">
                    <button class="btn-submit" type="submit">Submit Message</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {

    };
</script>
