---
title: "5 Great Git Commands"
date: "2019-08-13"
---

I’ve been working with git for a little over a year, and along the way I learned some neat tricks from coworkers, blog posts, and good ol' google! Below I go into detail on some of the commands that I have found to be very helpful.

<div>
  <a href="#with-lease" class="blog-nav__link">git push --force-with-lease</a>
</div>
<div>
  <a href="#reset-hard" class="blog-nav__link">git reset --soft [sha]</a>
</div>
<div>
  <a href="#delete-branches" class="blog-nav__link">git branch | grep -v "master" | xargs git branch -d</a>
</div>
<div>
  <a href="#interactive-rebase" class="blog-nav__link">git rebase -i HEAD~[number]</a>
</div>
<div>
  <a href="#the-dash" class="blog-nav__link">git checkout -</a>
</div>

### <a id="with-lease" class="blog-nav__anchor-link">`git push --force-with-lease`</a>

Fortunately, I haven't overwritten someone else's work when force pushing, and I would like to keep it that way. So, I have started to use this git command whenever I need to foce push. Usually, I have to force push changes when I rebase my branch off of master with `git rebase master`, or when I make a small change and amend that change to the last commit on my branch with `git commit --amend`. Both of those commands require you to force push if you want to update the remote branch. The problem is that if someone else has been working on your branch, and you run `git push --force`, you can override their changes. Then their updates to that branch could be lost forever. --force-with-lease prevents you from overwriting someone else's work on a branch, so it can save a lot of future headache. [Read more about --force-with-lease](https://blog.developer.atlassian.com/force-with-lease/)


### <a id="reset-hard" class="blog-nav__anchor-link">`git reset --soft [sha]`</a>

We all mess up; that’s why we have git. Thankfully there are several ways to rest your branch if you really mess up. `git reset` takes a couple of different flags including `--hard` and `--soft`. Using `--soft` is probably the safer of the two because it uncommits the changes you have made. Whereas, `--hard` uncommits your changes and deletes them. There are also a couple of ways to tell git at what point you want to reset your branch back to. You can pass `git reset` a branch name instead of a sha if you want it to point to the `HEAD` of a particular branch which would look like `git reset --soft origin/master`. I've used different combinations of `git reset`, and it has really helped me when I need to go back in time.


### <a id="delete-branches" class="blog-nav__anchor-link">`git branch | grep -v "master" | xargs git branch -d`</a>

I don’t always remember to delete my local branch after it is merged into master. That can be a problem when working on a project where I’m creating local branches and checking out other branches to review PRs. That leads to dozens of stale local branches. So, when I run `git branch` to see what branches I’m working on it’s impossible to sift through all of them to find the handful that I’m actually working on. This little script prints all of the branches with `[git branch](https://git-scm.com/docs/git-branch)`. Then it uses [grep](https://www.geeksforgeeks.org/grep-command-in-unixlinux/), a command that searches for patterns, and it’s `-v` flag to print out everything that does not match the pattern, or the parameter that you pass it to. The it uses [xargs](http://man7.org/linux/man-pages/man1/xargs.1.html) run the `git branch -d` command and deletes every branch that is not "master". If you want to delete branches that haven't been merged into master, you can switch the `-d` flag for `-D`.


### <a id="interactive-rebase" class="blog-nav__anchor-link">`git rebase -i HEAD~[number]`</a>

[interactive rebases](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) are so helpful when I need to curate my commits to showcase a meaningful commit history. With an interactive rebase you can drop commits, squash several commits together. or reword commit messages. Meaningful commits are great for a couple of reasons. First, if you are trying to debug something that's in master, good commits will help you to quickly find the source of that bug. Secondly, it can help you make good decisions when updating a feature. If you are trying to decide whether you can change or delete code that seems to have gone stale, then a well written commit history will help you understand why the code was written the way it was in the first place. This will help you be more confident when refactoring code.


### <a id="the-dash" class="blog-nav__anchor-link">`git checkout -`</a>

I hate having to type out branch names, so when I need to checkout the branch I was just on I use this dash symbol, `-`. In git, the dash is an alias for “branch I was just on”. My workflow usually consists of [checking out master](https://git-scm.com/docs/git-checkout), pulling down the latest changes, and then jumping back onto a work in progress branch to rebase it off of master. Using the dash is a nice way to quickly switch from master to that branch, instead of typing the whole name out. And, I don't use it exclusively for checking out branches. When merging a branch into master, I sometimes use the `-` as well. So, if I was just on my feature branch I can checkout master and run `git merge --ff-only -`. The dash after [--ff-only](https://git-scm.com/docs/git-merge#Documentation/git-merge.txt---ff-only) is that reference to the branch I was just on.



