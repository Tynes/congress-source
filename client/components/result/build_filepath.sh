#!/bin/bash

for i in $( ls ); do
  cd $i && touch $i.jsx && touch $i.test.jsx && cd ..
done