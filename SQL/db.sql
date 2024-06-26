CREATE TABLE Creator (
  CreatorID INT PRIMARY KEY AUTO_INCREMENT,
  CreatorName VARCHAR(255) NOT NULL,
  Updated DATETIME DEFAULT CURRENT_TIMESTAMP,
  Score INT
);

CREATE TABLE Content (
  ContentID INT PRIMARY KEY AUTO_INCREMENT,
  CreatorID INT NOT NULL,
  Title VARCHAR(255) NOT NULL,
  Score INT,
  Uploaded DATETIME DEFAULT CURRENT_TIMESTAMP,
  Sauce VARCHAR(255),
  FOREIGN KEY (CreatorID) REFERENCES Creator(CreatorID)
);

CREATE TABLE Tag (
  TagID INT PRIMARY KEY AUTO_INCREMENT,
  TagName VARCHAR(255) NOT NULL,
  Score INT
);

CREATE TABLE CreatorTag (
  CreatorID INT NOT NULL,
  TagID INT NOT NULL,
  FOREIGN KEY (CreatorID) REFERENCES Creator(CreatorID),
  FOREIGN KEY (TagID) REFERENCES Tag(TagID)
);

CREATE TABLE ContentTag (
  ContentID INT NOT NULL,
  TagID INT NOT NULL,
  FOREIGN KEY (ContentID) REFERENCES Content(ContentID),
  FOREIGN KEY (TagID) REFERENCES Tag(TagID)
);

ALTER TABLE Tag
ADD ParentTagID VARCHAR(255);