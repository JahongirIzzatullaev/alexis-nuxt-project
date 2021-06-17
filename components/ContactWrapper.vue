<template>
    <div class="contact-wrapper border-top">
        <div class="contact-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 m-auto text-center" data-aos="fade-up">
                        <h2 class="title">Contact us for any further questions, possible projects & business partnerships</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-xl-10 m-auto">
                        <div class="contact-info-content">
                            <div class="info-item info-item2" data-aos="fade-up" data-aos-delay="300">
                                <div class="info-title">
                                    <h4>Contact Directly</h4>
                                    <div class="icon">
                                        <i class="icofont-envelope"></i>
                                    </div>
                                </div>
                                <div class="info-content">
                                    <a href="mailto://demo@example.com">demo@example.com</a>
                                    <br>
                                    <a href="tel:0123456789">0123456789</a>
                                </div>
                            </div>
                            <div class="info-item" data-aos="fade-up" data-aos-delay="600">
                                <div class="info-title">
                                    <h4>Visit our office</h4>
                                    <div class="icon">
                                        <i class="icofont-location-pin"></i>
                                    </div>
                                </div>
                                <div class="info-content">
                                    <p>192 Orchard Street, California, United States</p>
                                </div>
                            </div>
                            <div class="info-item" data-aos="fade-up" data-aos-delay="900">
                                <div class="info-title">
                                    <h4>Work with us</h4>
                                    <div class="icon">
                                        <i class="icofont-briefcase"></i>
                                    </div>
                                </div>
                                <div class="info-content">
                                    <p>Send your CV to our email: <a href="mailto://demo@example.com">demo@example.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-xl-10 m-auto">
                        <div class="contact-form">
                            <div class="text-center" data-aos="fade-up">
                                <h2 class="title">Get In Touch</h2>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-map-area" data-aos="fade-up">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185374!2d144.95373631590425!3d-37.81720974201477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1607294780661!5m2!1sen!2ssg"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ContactForm: () => import('@/components/ContactForm'),
        },
    };
</script>
