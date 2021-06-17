<template>
    <div class="team-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12" data-aos="fade-up">
                    <h2 class="title">Meet Our Team</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-3" data-aos="fade-up" v-for="(member, index) in teamMembers" :key="index">
                    <div class="team-member">
                        <div class="thumb">
                            <img :src="member.imgSrc" :alt="member.name">
                        </div>
                        <div class="content">
                            <div class="member-info">
                                <h3 class="name">
                                    {{ member.name }}
                                </h3>
                                <span class="designation">{{ member.designation }}</span>
                            </div>
                            <div class="member-icons">
                                <a :href="link.url" v-for="(link, index) in member.socialLink" :key="index">
                                    <i :class="link.icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                teamMembers: [
                    {
                        imgSrc: "/images/team/01.jpg",
                        name: "Joe Biden",
                        designation: "CEO Founder",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/02.jpg",
                        name: "Uzzal Hossain",
                        designation: "Web Developer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/03.jpg",
                        name: "Uzzal Hossain",
                        designation: "Web Developer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/04.jpg",
                        name: "Jannat",
                        designation: "Web Developer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/05.jpg",
                        name: "Lora",
                        designation: "Web Developer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/06.jpg",
                        name: "Hasina",
                        designation: "Web Developer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/07.jpg",
                        name: "Uzzal Hossain",
                        designation: "Web Developer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/02.jpg",
                        name: "Uzzal Hossain",
                        designation: "Web Developer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            }
                        ]
                    },
                ]
            }
        },
    };
</script>