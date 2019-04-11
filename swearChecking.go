package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func main() {
	dictionaryFile, err := ioutil.ReadFile("data/txt/dictionary.txt")
	if err != nil {
		fmt.Print(err)
	}

	// commentsFile, err := ioutil.ReadFile("data/txt/comments.txt")
	// if err != nil {
	// 	fmt.Print(err)
	// }

	dictionaryArr := strings.Split(string(dictionaryFile), "\n")
	// comments := strings.Split(string(commentsFile), "\n")

	// fmt.Println(dictionary)
	// fmt.Println(comments)

	// var dictionary map[string]bool{}

	for i, word := range dictionaryArr {
		fmt.Println(i, word)
	}
}
