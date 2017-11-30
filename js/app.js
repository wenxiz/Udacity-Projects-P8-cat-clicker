var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttributes = ko.observable(data.imgAttributes);
	this.nickNames = ko.observableArray(data.nickNames);

	this.level = ko.computed(function() {
		var level;
		var clicks = this.clickCount();
		if (clicks < 10) {
			level = 'Newborn';
		} else if (clicks < 20) {
			level = 'Infant';
		} else if (clicks < 30) {
			level = 'Teen';
		} else if (clicks < 40) {
			level = 'Adult'
		} else {
			level = 'Ninja';
		}
		return level;
	}, this)
}

var initialCats = [
	{
		clickCount: 0,
		name: 'Tebby',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttributes: 'https://www.flickr.com/photos/cubagallery/5508784414/in/photolist-9oMXFC-mCZZJn-nLfTUQ-9bLLEJ-qbac9i-4n3gvY-RQC2yH-6i4qpS-p7EpRE-cfbnXh-oztpWs-9XLrR4-74scWq-oztstS-bpnxfN-qYAD3D-drMXnV-b2ygdF-e6u5Ej-oKG9Sj-bXqvdN-nXnhrm-fTMsFJ-aDqw2i-9pcCvQ-dw3Lkk-oztsCu-qJMG4L-48pLfd-8HhZTe-mbmQ8B-fZh6UW-abGk8F-sd77Bo-9yhe1y-7b4y4a-fZgT9e-gu8Wa-jgG2MB-7c8PDh-4HauQG-qLVZYW-9Dt112-bWBQH1-oH5WNt-bZ2XPu-avqKos-nNqZfY-ZKaBc5-8MzgVR',
		nickNames: ['Beauty', 'Milky', 'Porla', 'Watt', 'Messa'],
	},
	{
		clickCount: 0,
		name: 'Tiger',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttributes: 'https://www.flickr.com/photos/cubagallery/5508784414/in/photolist-9oMXFC-mCZZJn-nLfTUQ-9bLLEJ-qbac9i-4n3gvY-RQC2yH-6i4qpS-p7EpRE-cfbnXh-oztpWs-9XLrR4-74scWq-oztstS-bpnxfN-qYAD3D-drMXnV-b2ygdF-e6u5Ej-oKG9Sj-bXqvdN-nXnhrm-fTMsFJ-aDqw2i-9pcCvQ-dw3Lkk-oztsCu-qJMG4L-48pLfd-8HhZTe-mbmQ8B-fZh6UW-abGk8F-sd77Bo-9yhe1y-7b4y4a-fZgT9e-gu8Wa-jgG2MB-7c8PDh-4HauQG-qLVZYW-9Dt112-bWBQH1-oH5WNt-bZ2XPu-avqKos-nNqZfY-ZKaBc5-8MzgVR',
		nickNames: ['Teger'],
	},
	{
		clickCount: 0,
		name: 'Moji',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		imgAttributes: 'https://www.flickr.com/photos/cubagallery/5508784414/in/photolist-9oMXFC-mCZZJn-nLfTUQ-9bLLEJ-qbac9i-4n3gvY-RQC2yH-6i4qpS-p7EpRE-cfbnXh-oztpWs-9XLrR4-74scWq-oztstS-bpnxfN-qYAD3D-drMXnV-b2ygdF-e6u5Ej-oKG9Sj-bXqvdN-nXnhrm-fTMsFJ-aDqw2i-9pcCvQ-dw3Lkk-oztsCu-qJMG4L-48pLfd-8HhZTe-mbmQ8B-fZh6UW-abGk8F-sd77Bo-9yhe1y-7b4y4a-fZgT9e-gu8Wa-jgG2MB-7c8PDh-4HauQG-qLVZYW-9Dt112-bWBQH1-oH5WNt-bZ2XPu-avqKos-nNqZfY-ZKaBc5-8MzgVR',
		nickNames: ['hah'],
	},
	{
		clickCount: 0,
		name: 'Psa',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		imgAttributes: 'https://www.flickr.com/photos/cubagallery/5508784414/in/photolist-9oMXFC-mCZZJn-nLfTUQ-9bLLEJ-qbac9i-4n3gvY-RQC2yH-6i4qpS-p7EpRE-cfbnXh-oztpWs-9XLrR4-74scWq-oztstS-bpnxfN-qYAD3D-drMXnV-b2ygdF-e6u5Ej-oKG9Sj-bXqvdN-nXnhrm-fTMsFJ-aDqw2i-9pcCvQ-dw3Lkk-oztsCu-qJMG4L-48pLfd-8HhZTe-mbmQ8B-fZh6UW-abGk8F-sd77Bo-9yhe1y-7b4y4a-fZgT9e-gu8Wa-jgG2MB-7c8PDh-4HauQG-qLVZYW-9Dt112-bWBQH1-oH5WNt-bZ2XPu-avqKos-nNqZfY-ZKaBc5-8MzgVR',
		nickNames: ['PM'],
	},
	{
		clickCount: 0,
		name: 'Mala',
		imgSrc: 'img/9648464288_2516b35537_z.jpg',
		imgAttributes: 'https://www.flickr.com/photos/cubagallery/5508784414/in/photolist-9oMXFC-mCZZJn-nLfTUQ-9bLLEJ-qbac9i-4n3gvY-RQC2yH-6i4qpS-p7EpRE-cfbnXh-oztpWs-9XLrR4-74scWq-oztstS-bpnxfN-qYAD3D-drMXnV-b2ygdF-e6u5Ej-oKG9Sj-bXqvdN-nXnhrm-fTMsFJ-aDqw2i-9pcCvQ-dw3Lkk-oztsCu-qJMG4L-48pLfd-8HhZTe-mbmQ8B-fZh6UW-abGk8F-sd77Bo-9yhe1y-7b4y4a-fZgT9e-gu8Wa-jgG2MB-7c8PDh-4HauQG-qLVZYW-9Dt112-bWBQH1-oH5WNt-bZ2XPu-avqKos-nNqZfY-ZKaBc5-8MzgVR',
		nickNames: ['what'],
	},
	]

// Method 1: don't need to say this.currentCat().clickCount since we have in binding context of currentCat in HTML,
// so just this.clickCount()
// var ViewModel = function() {
// 	this.currentCat = ko.observable(new Cat());
	
// 	this.incrementCounter = function() {
// 		this.clickCount(this.clickCount() + 1);
// 	};
// }
// Method 2: we can use a trick that when you want to visit outer scope of 'this', in this case 'that' represents ViewModel
// you can store it in somewhere
var ViewModel = function() {
	var that = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		that.catList.push(new Cat(catItem))
	});

	this.currentCat = ko.observable(this.catList()[0] );

	this.incrementCounter = function() {
		that.currentCat().clickCount(that. currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		that.currentCat(clickedCat);
	};
}
ko.applyBindings(new ViewModel);