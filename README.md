# JAETE
## *Just Another Encrypted Text Editor*
JAETE is intended as a personal project for learning [NodeJS](https://nodejs.org/), [Electron](https://electron.atom.io/), and potentially [Polymer](https://www.polymer-project.org/). The core idea is to provide a cross simple-ish cross-platform text editor which saves ASCII text files in an excrypted manner. 

###Background
I have tinkered with encryption off and on since Colege. Usually simple cipher puzzles. But for a recent Service Bus Project at work, I implemented a *'Pretty Good Privacy'* or *PGP*, algorithm to protect the data send in the messages on the Bus. I went on to write a [short article for my blog](https://danieljscheufler.wordpress.com/2016/09/13/pretty-good-privacy/) on the topic providing a demonstration using Python and the Vignere cipher. The example code used may be found [here](https://github.com/djscheuf/ProgamingPractice/tree/Playground/Playground/Cryptography/PGP).

Ever since then I have wanted to do a little more with encryption. Partly due to my interest in the ciphers them selves, but also because I am increasingly interested in privacy. I happened on the idea of a simple encrypted Text Editor recently and thought it would provide a good proving ground for several interests I have.

### Project Plan
At the moment, I know for certain the project will have two phases and a potential third. The third is more nebulous, and as a result I will merely call it the 'Futures' Phas, and use it as a dumping ground for random ideas that I think might work well for JAETE.

####Phase 0 - Project Start up
Phase 0 will lay the groundwork for the project. The Goals are:
	1. Create a Simple Text Editor for ASCII files.
		1. This means I will be able to  open/create/edit/Save any given ASCII file.
	2. Learn the basics of NODE.JS and Elecron
		1. I may also explore reusable widgets with Polymer, but this may be defered to Phase 1.

Notable tasks for Phase 0 include:
	[_] Determine the basic UX for JAETE.
		* Generally JAETE ought function like gEdit or similar.
	[_] Decide on the look for JAETE
		* This will involve the majority of my learning of HTML and CSS.
	[_] *Perhaps Develop an Icon for JAETE?*
	[_] Produce an extensible code base which will enable the development of features in Phase 1

####Phase 1 - Begin Encryption
During Phase 1, I will implement the actual encryption part of JAETE. THe plan at the moment is the use an easily accessible Algorithm, in a PGP scheme, along with a 'password' that the user will provide. 

The Goals for the end of Phase 1 :
	1. The User can save an ASCII file into an encrypted form
	2. The User can open and read a previously encrypted ASCII file
	3. The User can specify a default password for their files, or a specific one for a given file. Both must originate from the User.
	4. The User can open an unencrypted file, and then save it into an encrypted form. 
		1. Encrypted Files will have the __.etxt__ extension.

Notable Tasks for Phase 1 include:
	[_] Extending the Save and Open File workflows
	[_] Implementing support for User-provided passwords
	[_] Recognition of and support for __.etxt__ files.

####Phase *'Futures'*
Some additional ideas for JAETE to implement:
*Save encrypted comments on Github issues
	* Origin: An article I read discussing replacing Discus comments with comments on Github repos. (I will try to find the link again)
*Encryption by multiple files
	* Find some way to merge a trio of files, each being valid, and encrypted, and potentially used to encrypt each other.

