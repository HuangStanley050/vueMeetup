<template>
  <v-container>
    <v-row wrap>
      <v-col xs="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <v-card class="info">
          <v-container fluid>
            <v-row>
              <v-col xs="5" sm="4" md="3">
                <v-img
                  c
                  src="https://images.unsplash.com/photo-1560972550-aba3456b5564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  class="white--text"
                  height="200px"
                />
              </v-col>
              <v-col xs="7" sm="8" md="9">
                <v-card-title primary-title>
                  <div>
                    <h4 class="white--text mb-0">
                      My Meetup
                    </h4>
                    <div>
                      July 17, 2019
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat to="/meetups/1">
                    <v-icon left> mdi-map-marker </v-icon>View Meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
