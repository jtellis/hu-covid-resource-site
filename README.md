# NYS COVID-19 Parent Portal

## About

With the pandemic still very much affecting all parts of everyone's life, it's more pressing than ever that children receive the help they need academically in order to not fall behind in their studies or get discouraged in their ability to learn. It's with this thought in mind that we designed the NYS COVID-19 Parent Portal to aid families in assessing the help their younger members may need and to provide means for them to get that help.

The portal achieves the first of these two goals by providing an interactive map created through tableau with data we were able to collect from NYS' public health data as well as NYS' school funding data. We assessed how hard current times are on students' studies by combining how prevelant the coronavirus is in their county as well as how much money gets put into the schools in the county, with respect to the number of children enrolled. By looking at the color coded map, families can easily determine the likelihood of their children needing help with their schooling.

The second goal is achieved through a collection of resources for families to use. These are grouped by region so no family has to dig through things they don't need in order to get help. On top of this, the resources are also capable of being edited by the families themselves so if any families find important resources or generate some of their own, such as study groups, they can post them freely for others to take advantage of. Through this, we hope to allow users to take a community based approach to solving the issues their children may face, easing the stress on everyone.

As for the technical aspects, our web app was built using Tableau for the visuals, the data was processed using python with beautifulsoup4 for scraping the web for some specific data we needed. The Tableau visual is rendered via React which also interacts with Tableau's API to respond to the user interacting with the map. The website also relies on Google Firebase to send and receive users' resources.

## Development

This project was created by [J. White](https://github.com/WhiteWalz) and [Jesse Ellis](https://github.com/jtellis) with support from Ignacio Mejias. It was created during [Hack Upstate XV](https://hackupstate.com/events/xv).

### Hack Upstate Submission

[DEVPOST submission page](https://devpost.com/software/nys-covid-19-parent-portal)
