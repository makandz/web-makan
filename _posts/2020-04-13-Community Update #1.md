---
layout: post
title: "Community Update #1"
subtitle: An Abs0rb.me v5 announcement
category: abs0rb.me
---

### Welcome
You've probably never seen this before. This is something new I'm trying out, essentially I'll be posting a community
update every 2 - 3 weeks (starting today) to keep everyone up to date with the current information and progress of the
upcoming v5 update. This update is huge, we've spent a lot of time planning and finding ways to make our backend as
future-proof as possible. It may have taken a while, but we are on the home stretch!

### Boring stuff out of the way
We haven't been working on anything too excited at the moment. Mainly website backend stuff to make sure user login,
registration, commands, etc are all as streamlined as possible. The current backend was built during v2 era, it's more
than two years old! I've heard all of your complaints, such as the infamous password request issue that only lets you
request a password reset once. We're working closely in fixing up these issues and making the security, accessibility,
and reliability of our members system.

### Registration is better than ever
Let's get registration out of the way first.

<img src="{{ site.baseurl }}/assets/blog-img/community-update/1.png" alt="register panel">

Creating an account is now as seamless as possible. No longer will you get refreshed when you make a mistake resulting 
in the data you entered into your input to be reset. No more having to type in the characters of the letters every time 
for the captcha check. Mistakes in input fields are now also checked on the client-side before being sent to the server.
Why is this helpful you may ask? You'll be instantly notified of mistakes within your form and everything you spent time
inputting won't be reset until you've completed the form and have successfully registered for an account. Alongside 
this, alerts are now redesigned and will fluently slide down notifying you of issues with your form.

<img src="{{ site.baseurl }}/assets/blog-img/community-update/2.png" alt="email in use error">

### Updating your account settings
Updating account settings was redone from the ground-up. We added a few icons and improved the overall design and used 
the same client-side checks from the registration system here as well.

<img src="{{ site.baseurl }}/assets/blog-img/community-update/3.png" alt="update account settings panel">

### Keeping you secure
Keeping your accounts secure is our number one priority. Over the past 4 years, we've learned a lot about ways to keep 
you protected, and we haven't stopped. v5 introduces many new security implementations, improved the security of 
authentication tokens to prevent shady extensions from being able to steal your login token. Updating any user settings 
will be logged and crucial settings updates will get email notifications sent to the user account. We've also introduced 
website rollback. For example, if you're buying a skin and suddenly the website decides to shut down, none of your coins
or data will be lost - the website will automatically revert the changes it's made.

### That's not all
There have been so many changes, it's hard to even keep track of them anymore! Many of the changes were not listed in 
this post, we hope to let everyone get access to these during the public beta which should roll out in the upcoming 
weeks. Keep up to date and get in contact with the developers via our [Discord](https://discord.com/invite/7DYTZdm) and 
get a chance to join our alpha testers team to get hands-on access to v5 before anyone else. I'll try to release a new 
community update in the upcoming weeks, see you soon!