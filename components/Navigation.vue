<template>
    <ul>
        <li>
            <n-link to="/">Home</n-link>
        </li>
        <li>
            <n-link to="/about">About</n-link>
        </li>
        <li class="has-children">
            <n-link to="/portfolio">Project</n-link>
            <ul class="sub-menu">
                <li>
                    <n-link to="/portfolio">Project</n-link>
                </li>
                <li>
                    <n-link to="/portfolio-details">Project Details</n-link>
                </li>
            </ul>
        </li>
        <li class="has-children">
            <n-link to="/blog">Blog</n-link>
            <ul class="sub-menu">
                <li>
                    <n-link to="/blog">Blog</n-link>
                </li>
                <li>
                    <n-link to="/blog-details">Blog Details</n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="/contact">Contact</n-link>
        </li>
    </ul>
</template>