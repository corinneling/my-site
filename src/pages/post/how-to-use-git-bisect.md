---
title: "Find Bugs Faster with Git Bisect"
date: "2019-08-24"
---

Bugs are going to happen. We are all human, so new bugs can get introduced into our codebase at anytime. Especially, if we are on a large project with many different developers updating and refactoring code. A lot of the times PR, or code, reviews can help catch bugs before they are added to the main codebase. But, when that elusive bug does end up sneaking into your project you can use `git bisect`.

One such instance came about when I was adding eslint to a project. This project was already up and running,and had a lot going on. So, when I added eslint to the project and to our build process there were hundreds and hundreds of linting errors. Because of the project, the fixes, and some customizations to our eslint config file, I ended up separating the work into about 10 different commits. The code was reviewed, merged in, and the next morning there was a bug in the project. At this point I didn't know what had caused, I just knew that a ton of code changes went in the day before, as well as a few other commits from other developers on the team. That's when my coworker introduced me to `git bisect`. 

## What is Git Bisect
[Git bisect]((https://git-scm.com/docs/git-bisect)) is basically a way to automate the process of finding bugs in your commit history. It takes two points of your commit history: 'Point A' and 'Point B'. Then it checks through the commits between those two points. It will start with a commit near 'Point A' and ask if the bug is still there. Then it will move on to a commit near 'Point B' and ask if the big is still there. It will keep bisecting that range between the two points until it eventually gets to the commit that introduced the bug.

## How to Use Git Bisect
To start the process of git bisect you will need to run the command `git bisect start`. There won't be any feedback from that command since we are just starting the bisecting process.

Then, you will need to set the two points. 'Point A' is going to be where things are broken, and Point B', is going to be when things were still working, in the past.  

Start off with setting 'Point A'. You’ve already realized that there is a bug and something is broken, so tell git bisect that the project, at its current state, is broken by running `git bisect bad`. There will be no feedback for this as well since we are just setting one of the two points.

Then pick a point when you know things were still working, such as when you last pulled down the master branch, ran it, the project was still working as expected in the browser. This commit for 'Point B' could be a few commits in the past or many. When I went through this process, the commit I chose was one about 12 commits behind the HEAD. Find the SHA for that commit and run `git bisect good [SHA]`

This is when the feedback from git bisect starts to get good! You should now see something similar to this in your command line:

```
		f5378e6bd5bedf6c08bab16b42b0f2b0680a6112 is the first bad commit
		commit f5378e6bd5bedf6c08bab16b42b0f2b0680a6112
		Author: corinne <corinne@myemail.something>
		Date:   Wed Aug 21 20:38:05 2019 -0400

				post: git bisect

		:040000 040000 beed8f0e483baddf814253c778d1502a7ffca33a 8c4c739ae77d90c885ea9140b324ec59fa3f3c0e M	src
```

Then check your project in the browser. Is the bug still there; is the site still broken? Then run `git bisect bad`. This is your way of communicating to git what you saw in the browser. It doesn't know that your site is still broken, but by running `git bisect bad` you are communicating that knowledge to git. Git bisect will then run again and give similar feedback, with a new commit between those two points.

## Git Found the Commit
Check you project in the browser. Is it still broken? Run `git bisect bad`. Is it no longer broken? Then run `git bisect good`. Keep doing this until git bisect outputs the commit where things broke. Now you know when the bug was introduced and you can look at the changes that happened when that commit was merged. The only thing you have to do after that is run `git bisect reset`, which is will reset your branch.