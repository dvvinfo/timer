**Convenient and simple countdown timer on Java script.**

For the timer to work in the html file, the genitive block must be assigned id="timer".

And assign classes:

class="days" block Day.

class="hours" block Clock.

class="minutes" to block  Minute.

class="seconds" to block Seconds.

Sample html file is available in this project.

The report date and time zone is set in let deadline = '2020-01-01 GMT+0300'. Just put your numbers.

You can also assign your classes to blocks Day, Hours, Minutes, Seconds. But you need to change these classes in the main file.js
If you do not need any block of timer numbers then just comment out or delete in the main file.js all lines of code associated with a given block.

For example, if you do not need the days block then comment out or delete the following lines of code in the main file.js:

days  = Math.floor((t/(1000*60*60*24))),

'days' : days ,

days = timer.querySelector('.days'),

days.textContent = t.days;

P.s. If the timer does not work you need to set the countdown date in the file main.js here let deadline = '2020-01-01 GMT+0300'.

**Удобный и простой таймер обратного отсчета  на джава скрипте.**

Для работы таймера нужно в html файле родительному блоку присвоить id="timer".

И присвоить классы:

 class="days" блоку День.
 
 class="hours" блоку Часы.
 
 class="minutes" блоку Минуты.
 
 class="seconds" блоку Секунды.
 
Примерный html файл имеется в данном проекте. 

Дата отчета и часовой пояс задается в let deadline = '2019-08-21'. Просто поставьте свои цифры.

Вы также можете присвоить свои классы блокам День, Часы, Минуты, Секунды. Но при этом нужно изменить данные классы в файле main.js

Если вам не нужен какой либо блок цифр таймера то просто закомментируйте или удалите в файле main.js все строчки кода связанные с данним блоком.

Например если вам не нужен блок Дни тогда закомментируйте или удалите следующие строчки кода в файле main.js:

days  = Math.floor((t/(1000*60*60*24))),

'days' : days ,

days = timer.querySelector('.days'),

days.textContent = t.days;

P.s. Если таймер не работает нужно установить дату отсчета времени в файле main.js сюда let deadline = '2020-01-01 GMT+0300'.


