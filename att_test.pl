#!/usr/bin/perl
#use strict;
use warnings;
use DBI;

my $dbh = DBI->connect("dbi:SQLite:att_test.db","","");

# print "Hello, world\n";

# assign array variable to SELECT * FROM database
$people = $dbh->selectall_arrayref( q( SELECT * FROM people;));
#print "people \n";

# loop over array (nested?) and print
foreach( @$people ) {
  foreach $i (0..$#$_){
    print "$_->[$i] "
  }
  print "\n";
}

$dbh->disconnect;